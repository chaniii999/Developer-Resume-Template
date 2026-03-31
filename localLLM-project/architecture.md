# LocalLLM-OCR project(의회문서요약프로젝트)

---

#### [Architecture Design] 3060 12GB 기반 4인 동시 요약 RAG 시스템

> 구현 대조·갭 정리: [`최종-아키텍처-구현-체크리스트.md`](최종-아키텍처-구현-체크리스트.md)

---

### 🚀 1. GPU: Inference Optimization (VRAM 12GB)
**"VRAM 낭비를 최소화하고 추론 효율을 극대화하는 지능 연산 레이어"**

* **Model:** BLLOSSOM-8B (Korean Fine-tuned)
    * **Quantization:** 4-5bit (VRAM 약 5.5~6GB 점유)
    * **Context Window:** vLLM `max_model_len` 등 서버 설정(예: 4,096). 요약 출력 상한은 Worker `.env` **`SUM_MAX_TOKENS`** (4096).
* **Serving Engine: vLLM (Continuous Batching)**
    * **Efficiency:** PagedAttention 기술을 통해 KV 캐시 메모리 파편화 제거
    * **Concurrency:** `--max-num-seqs 4` 설정을 통해 4인 요청 동시 추론 보장
    * **Optimization:** `--enforce-eager` 옵션으로 CUDA Graph 오버헤드(약 1GB) 환급
### 어댑터: 3개 (요약,챗봇,메타데이터) 1개 몇백MB?
-> 파인튜닝 목표: 프롬프트 줄이기.

### 🧠 2. CPU: RAG Pipeline & Multi-Stage Filtering (RAM 32GB)
**"GPU 자원 간섭 없이 텍스트 정제 및 검색 품질을 책임지는 로직 레이어"**

* **Framework: LlamaIndex (Async Architecture)**
    * **Optimization:** `AsyncQueryEngine`을 통한 비동기 I/O 처리 및 사전 청킹 전략 수립
* **1st Stage - Embedding: nlpai-lab/KURE-v1 (CPU-only)**
    * **Role:** 한국어 의미론적 유사도 기반 상위 15~20개 청크 1차 선별
    * **Benefit:** GPU 메모리 약 1.5GB 절약 및 시스템 RAM(1.5GB) 상주로 고속 검색
* **2nd Stage - Re-ranker: BAAI/bge-reranker-v2-m3 (ONNX)**
    * **Role:** 1차 결과 중 최적의 컨텍스트 3개 정밀 재정렬 (Cross-Encoder 방식)
    * **Performance:** ONNX Runtime 가속을 통해 CPU 환경에서도 4인 동시 요청 1초 내 처리

---

### 💾 3. STORAGE: High-Speed Vector Storage
**"멀티 테넌시 대응 및 고속 데이터 입출력을 지원하는 저장 레이어"**

* **Vector DB: ChromaDB (In-memory & Persistence)**
    * **Compatibility:** LlamaIndex와의 완벽한 호환성 및 로컬 LLM 서빙 최적화
    * **Security:** `Metadata Filters`를 통한 문서 ID별 격리 검색 구현 (데이터 간섭 차단)
    * **Storage:** NVMe SSD 기반 영구 저장으로 빠른 인덱스 로딩 보장

---

### 📊 Resource Allocation Summary
| Component | Device | Est. Memory Usage | Key Tech |
| :--- | :---: | :---: | :--- |
| **LLM Inference** | **GPU** | 10~11 GB | vLLM, PagedAttention |
| **Embedding/Rerank** | **CPU** | 4~5 GB | ONNX, CPU-Inference |
| **Vector Index** | **RAM** | 1~4 GB | ChromaDB Metadata Filter |
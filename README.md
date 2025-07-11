# SDE Assignment - July 2025

## 🧩 Problem Statement
Clean and validate product codes based on the following format:

- Each code must be exactly **7 characters long**
- The first **3 characters** must be **letters** (A–Z, case-insensitive)
- The last **4 characters** must be **digits**

## ✅ Solution Overview

- Implemented as a **Node.js module**
- Valid codes are **normalized to uppercase**
- Returns a summary including:
  - Total codes processed
  - Count of valid and invalid codes
  - Sorted list of valid codes

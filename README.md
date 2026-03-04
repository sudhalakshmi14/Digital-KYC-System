# SecureAI-KYC

SecureAI-KYC is an AI-powered digital KYC onboarding system designed to enable secure, paperless identity verification for banking and financial services. The platform integrates document upload, OCR-based data extraction, face verification, and fraud detection to prevent identity theft, impersonation, and synthetic identity attacks during the onboarding process.

## Features

* Paperless digital KYC onboarding
* Document upload and verification
* OCR-based identity data extraction
* AI-powered face verification
* Fraud detection and risk scoring
* Admin dashboard for monitoring KYC status

## Tech Stack

**Frontend:** React / React Native
**Backend:** Node.js, Express.js
**AI Services:** Python, OpenCV, DeepFace, OCR
**Database:** MongoDB
**Security:** JWT Authentication, Encryption

## Project Structure

```
Digital-KYC-System
│
├── frontend
├── backend
├── ai-services
├── database
└── docs
```

## Installation

### Clone the Repository

```
git clone https://github.com/your-username/secureai-kyc.git
cd secureai-kyc
```

### Backend Setup

```
cd backend
npm install
npm start
```

### Frontend Setup

```
cd frontend
npm install
npm start
```

## How It Works

1. User registers and logs into the platform.
2. User uploads identity documents (Aadhaar / PAN / Passport).
3. OCR extracts information from the documents.
4. Face verification compares the user's selfie with the document image.
5. Fraud detection module analyzes risk signals.
6. System generates a verification status and risk score.
7. Admin dashboard monitors and reviews flagged cases.

## Future Enhancements

* Deepfake detection
* Blockchain-based identity storage
* Behavioral biometrics
* Continuous identity monitoring

## License

This project is developed for educational and hackathon purposes.

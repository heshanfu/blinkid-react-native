import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult, 
    EudlCountry, 
    DocumentFaceDetectorType,
    ImageExtensionFactors,
} from '../types'

/**
 * Result object for AustriaPassportRecognizer.
 */
export class AustriaPassportRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of Austrian passport owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Austrian passport 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of Austrian passport 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The given name of the Austrian passport owner 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         * The height of the passport owner in centimeters 
         */
        this.height = nativeResult.height;
        
        /** 
         * The issuing authority of the Austrian passport 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * The nationality of the Austrian passport owner 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The passport number of the Austrian passport 
         */
        this.passportNumber = nativeResult.passportNumber;
        
        /** 
         * The place of birth of the Austrian passport owner 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The sex of the Austrian passport owner 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the Austrian passport owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan Austrian passport.
 */
export class AustriaPassportRecognizer extends Recognizer {
    constructor() {
        super('AustriaPassportRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Austrian passport owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Austrian passport should be extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Austrian passport should be extracted 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if given name of Austrian passport owner should be extracted 
         */
        this.extractGivenName = true;
        
        /** 
         * Defines if height of Austrian passport owner should be extracted 
         */
        this.extractHeight = true;
        
        /** 
         * Defines if issuing authority of Austrian passport should be extracted 
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if nationality of the Austrian passport owner should be extracted 
         */
        this.extractNationality = false;
        
        /** 
         * Defines if passport number of Austrian passport should be extracted 
         */
        this.extractPassportNumber = true;
        
        /** 
         * Defines if place of birth of Austrian passport owner should be extracted 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if sex of Austrian passport owner should be extracted 
         */
        this.extractSex = true;
        
        /** 
         * Defines if surname of Austrian passport owner should be extracted 
         */
        this.extractSurname = true;
        
        /** 
         * The DPI (Dots Per Inch) for face image that should be returned. 
         */
        this.faceImageDpi = 250;
        
        /** 
         * The DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * The extension factors for full document image. 
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        /** 
         * The DPI (Dots Per Inch) for signature image that should be returned. 
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new AustriaPassportRecognizerResult(nativeResult); }
    }
}
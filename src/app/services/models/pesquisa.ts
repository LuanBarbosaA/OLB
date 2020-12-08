export class IdList {
    public Id: string[];
}

export class TermSet {
    public Term: string ;
    public Field: string;
    public Count: string;
    public Explode: string; 
}

export class TranslationStack {
    public TermSet: TermSet;
    public OP: string; 
}

export class ESearchResult {
    public Count: string;
    public RetMax: string;
    public RetStart: string; 
    public IdList: IdList;
    public TranslationSet: string; 
    public TranslationStack: TranslationStack; 
    public QueryTranslation: string;
}
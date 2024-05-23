import type { Schema, Attribute } from '@strapi/strapi';

export interface GdprKnowledgeBaseArticoloGdpr extends Schema.Component {
  collectionName: 'components_gdpr_knowledge_base_articolo_gdprs';
  info: {
    displayName: 'Articolo GDPR';
    description: '';
  };
  attributes: {
    Nome_Articolo: Attribute.String;
    Descrizione: Attribute.Text;
  };
}

export interface GdprKnowledgeBaseContestoPattern extends Schema.Component {
  collectionName: 'components_gdpr_knowledge_base_contesto_patterns';
  info: {
    displayName: 'Contesto Pattern';
    description: '';
  };
  attributes: {
    Contesto: Attribute.Text;
  };
}

export interface GdprKnowledgeBaseCwe extends Schema.Component {
  collectionName: 'components_gdpr_knowledge_base_cwes';
  info: {
    displayName: 'CWE';
  };
  attributes: {
    Nome_CWE: Attribute.String;
    Id_CWE: Attribute.Integer;
    Descrizione: Attribute.Text;
  };
}

export interface GdprKnowledgeBaseDescrizionePattern extends Schema.Component {
  collectionName: 'components_gdpr_knowledge_base_descrizione_patterns';
  info: {
    displayName: 'Descrizione Pattern';
    description: '';
  };
  attributes: {
    Descrizione: Attribute.Text;
  };
}

export interface GdprKnowledgeBaseEsempi extends Schema.Component {
  collectionName: 'components_gdpr_knowledge_base_esempis';
  info: {
    displayName: 'Esempi';
    description: '';
  };
  attributes: {
    Descrizione: Attribute.Text;
  };
}

export interface GdprKnowledgeBaseIso9241210 extends Schema.Component {
  collectionName: 'components_gdpr_knowledge_base_iso_9241_210s';
  info: {
    displayName: 'ISO 9241-210';
  };
  attributes: {
    Nome_ISO: Attribute.String;
    Id_ISO: Attribute.Integer;
    Descrizione: Attribute.Text;
  };
}

export interface GdprKnowledgeBaseMvc extends Schema.Component {
  collectionName: 'components_gdpr_knowledge_base_mvcs';
  info: {
    displayName: 'MVC';
    description: '';
  };
  attributes: {
    Nome: Attribute.String;
  };
}

export interface GdprKnowledgeBaseOwasp extends Schema.Component {
  collectionName: 'components_gdpr_knowledge_base_owasps';
  info: {
    displayName: 'OWASP';
  };
  attributes: {
    Nome_OWASP: Attribute.String;
    Id_OWASP: Attribute.Integer;
    Descrizione: Attribute.Text;
  };
}

export interface GdprKnowledgeBasePbd extends Schema.Component {
  collectionName: 'components_gdpr_knowledge_base_pbds';
  info: {
    displayName: 'PBD';
    description: '';
  };
  attributes: {
    Descrizione: Attribute.Text;
  };
}

export interface GdprKnowledgeBaseStrategie extends Schema.Component {
  collectionName: 'components_gdpr_knowledge_base_strategies';
  info: {
    displayName: 'Strategie';
    description: '';
  };
  attributes: {
    Strategia: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'gdpr-knowledge-base.articolo-gdpr': GdprKnowledgeBaseArticoloGdpr;
      'gdpr-knowledge-base.contesto-pattern': GdprKnowledgeBaseContestoPattern;
      'gdpr-knowledge-base.cwe': GdprKnowledgeBaseCwe;
      'gdpr-knowledge-base.descrizione-pattern': GdprKnowledgeBaseDescrizionePattern;
      'gdpr-knowledge-base.esempi': GdprKnowledgeBaseEsempi;
      'gdpr-knowledge-base.iso-9241-210': GdprKnowledgeBaseIso9241210;
      'gdpr-knowledge-base.mvc': GdprKnowledgeBaseMvc;
      'gdpr-knowledge-base.owasp': GdprKnowledgeBaseOwasp;
      'gdpr-knowledge-base.pbd': GdprKnowledgeBasePbd;
      'gdpr-knowledge-base.strategie': GdprKnowledgeBaseStrategie;
    }
  }
}

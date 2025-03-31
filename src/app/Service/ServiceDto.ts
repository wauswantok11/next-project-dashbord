export interface BusinessDTO {
  businessID: string;
  businessName: string;
  countOfCA: number;
  createdAt: string;
  createdBy: string;
  deletedAt: string | null;
  deletedBy: string | null;
  dipchip: { step: { label: string; value: string }[] };
  employees: EmployeeDTO[];
  excel: string[];
  formatData: FormatDataDTO[];
  mailOptions: MailOptionsDTO[];
  mailTemplate: MailTemplateDTO[];
  policy: PolicyDTO[];
  portal: PortalDTO[];
  services?: string[];
  settingPassword: SettingPasswordDTO[];
  themes?: ThemeDTO;
  updatedAt: string;
  updatedBy: string;
  __v: number;
  _id: string;
}

export interface EmployeeDTO {
  account_title_eng: string;
  account_title_th: string;
  first_name_eng: string | null;
  first_name_th: string;
  id: string;
  id_card_num: string;
  last_name_eng: string | null;
  last_name_th: string;
  username: string;
}

export interface FormatDataDTO {
  kind: string;
  data: object;
  account_id: string;
}

export interface MailOptionsDTO {
  isSMTP: boolean;
  isUsername: boolean;
  smtpHost: string;
  smtpPost: string;
  smtpUsername: string;
  smtpPassword: string;
  nameSender: string;
  emailSender: string;
  emailBcc: string;
  active: boolean;
  updatedBy: string | null;
  deletedAt: string | null;
  deletedBy: string | null;
}

export interface MailTemplateDTO {
  template_subject: string;
  template_detail: string;
  template_name: string;
  active: boolean;
  template_type: string;
  updatedBy: string | null;
  createdAt: string | null;
  createdBy: string | null;
  deletedAt: string | null;
  deletedBy: string | null;
}

export interface PolicyDTO {
  policy_id_cmp: string;
  announce_name: string;
  announce_no: string;
  announce_date: string;
  ticket_id: string;
  policy_title: string;
  policy_detail: string;
  policy_active: boolean;
  updatedBy: string | null;
  createdAt: string | null;
  createdBy: string | null;
  deletedAt: string | null;
  deletedBy: string | null;
}

export interface PortalDTO {
  updateRealTime: boolean;
  retrieveData: string[];
  kind: string;
  name: string;
  retrieve: { from: string; url: string; token: string }[];
  loginMethod: string[];
  approvalMethod: {
    autoApprove: boolean;
    clientIDList: string[];
  };
  active: boolean;
  theme: {
    name: string;
    primaryColor: { r: number; g: number; b: number; a: number };
    secondaryColor: { r: number; g: number; b: number; a: number };
    logo: string;
    background: string;
  };
  clientID: string;
  redirectURL: string;
  useCA: boolean;
  contact: string;
}

export interface SettingPasswordDTO {
  oauthActive: boolean;
  numExp: number;
  numNotiDay: number;
  createdAt: string | null;
  createdBy: string | null;
  updatedAt: string | null;
  updatedBy: string | null;
  deletedAt: string | null;
  deletedBy: string | null;
}

export interface ThemeDTO {
  logo: string;
  prefix: string;
  style: {
    primary_color: string;
    secondary_color: string;
    landing_page_wording: string;
  };
}

//? dto dashboard


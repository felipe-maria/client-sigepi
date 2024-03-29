export interface CertificateDto {

  id: number;
  owner: string;
  segment: string;
  category: string;
  media: string;
  issuer: string;
  expeditionDate: Date;
  dueDate: Date;
  remainingDays: number;

}

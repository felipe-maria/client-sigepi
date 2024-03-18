export interface CertificateDto {

  id: number;
  owner: string;
  segment: string;
  category: string;
  media: string;
  issuer: string;
  expeditionDate: string;
  dueDate: string;
  remainingDays: number;

}

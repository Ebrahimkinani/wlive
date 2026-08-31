export type Certificate = {
  id: string;
  step: string;
  title: string;
  subtitle: string | null;
  description: string;
  /** Public path when a certificate asset is ready (e.g. "/images/certificates/ssl.webp"). */
  image: string | null;
  imageLight?: string | null;
  imageDark?: string | null;
};

export const CERTIFICATES: Certificate[] = [
  {
    id: "ssl",
    step: "01",
    title: "SSL/TLS Certificates",
    subtitle: null,
    description:
      "SSL/TLS Certificates provide secure encryption to protect data during transmission between the user and the server, ensuring confidentiality and integrity.",
    image: "/certificates/ssl.png",
  },
  {
    id: "iso-27701",
    step: "02",
    title: "ISO/IEC 27701",
    subtitle: "Privacy Protection Certificate",
    description:
      "is a global standard for Privacy Information Management, outlining requirements and guidelines for protecting personal data and ensuring compliance with privacy regulations like GDPR",
    image: "/certificates/security.png",
  },
  {
    id: "iso-27001",
    step: "03",
    title: "ISO/IEC 27001",
    subtitle: "standard for Information Security",
    description:
      "is an international standard for Information Security Management Systems (ISMS), defining best practices to protect data, mitigate security risks, and ensure confidentiality, integrity, and availability of information.",
    image: "/certificates/security%20system.png",
  },
];

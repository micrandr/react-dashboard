import http from "./http-common";

const upload = (file: File, onUploadProgress: any): Promise<any> => {

  let formData = new FormData();

  formData.append("file", file);
  formData.append("doc-flie-type", "URSSAFF")
  formData.append("doc-date-expired","31-12-2023")
  formData.append("doc-file-name","File name fichier nom")

  // upload
  return http.post("/documents", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = () : Promise<any> => {
  return http.get("/documents");
};

const UploadFileService = {
  upload,
  getFiles,
};

export default UploadFileService;
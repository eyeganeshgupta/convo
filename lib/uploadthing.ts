import { OurFileRouter } from "@/app/api/uploadthing/core";
/*
import { generateComponents } from "@uploadthing/react";
*/
import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

/*
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();
*/

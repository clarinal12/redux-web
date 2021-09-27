/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UploadFileInput } from './globalTypes';

// ====================================================
// GraphQL mutation operation: UploadFile
// ====================================================

export interface UploadFile_uploadFile_file {
  __typename: 'File';
  id: string;
  url: any | null;
  mimetype: string;
}

export interface UploadFile_uploadFile {
  __typename: 'UploadFileResponse';
  file: UploadFile_uploadFile_file;
}

export interface UploadFile {
  /**
   * Upload File
   *
   * ### Unsupported Mimetype
   * -application/x-troff-msvideo
   * -video/avi
   * -video/msvideo
   * -video/x-msvideo
   * -video/quicktime
   * -video/x-quicktime
   * -image/mov
   * -video/avi
   * -video/ogg
   * -video/x-ms-wmv
   * -video/x-ms-asf
   * -video/webm
   *
   * ### Error Codes
   *
   * - **F00001** - Error occured in writing the file.
   * - **F00002** - Cannot package video.
   * - **F00003** - Cannot pin directory to IPFS.
   * - **F00004** - Unsupported mimetype.
   */
  uploadFile: UploadFile_uploadFile;
}

export interface UploadFileVariables {
  input?: UploadFileInput | null;
}

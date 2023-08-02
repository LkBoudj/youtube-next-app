"use client";
import { Btn } from ".";
import { HiX, HiOutlineUpload } from "react-icons/hi";
import { useForm } from "react-hook-form";
type Props = {};
import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
const UploadVideo = (props: Props) => {
  const [file, setFile] = useState();

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      setFile(acceptedFiles);
    },
    [file]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className="zx-[9999] w-full h-full fixed top-0 left-0 bg-black bg-opacity-40">
      <div className="flex items-center h-full w-full  justify-center">
        <div className="bg-white w-full max-w-5xl pb-16">
          <div className="flex items-center justify-between px-6 border-b-[.5px] border-slate-300 py-9">
            <h3 className="text-lg font-semibold">Uplload videos</h3>
            <Btn className="text-slate-500 w-6" StartIcon={HiX} type="button" />
          </div>
          <div className="flex items-center justify-center h-64">
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <Btn
                  className="text-slate-400 w-36 h-36  bg-slate-200 rounded-full justify-center"
                  StartIcon={HiOutlineUpload}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadVideo;

/*


  <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <Btn
                  className="text-slate-200 w-24 h-24  bg-slate-600 rounded-full justify-center"
                  StartIcon={HiOutlineUpload}
                />
              )}
            </div>

*/

import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

import { IconButton, Flex, HStack } from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";

const videoConstraints = {
    width: 720,
    height: 360,  
    facingMode: "user"
};

const CamComponents = () => {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      setUrl(imageSrc);
    }
  }, [webcamRef]);

  return (
    <React.Fragment>
    
      {isCaptureEnable || (
         <IconButton
         style={{
           position: "absolute",
           top: "70%",
         }}
         aria-label="Camera"
         justifyItems={"center"}
         variant="outline"
         size={"lg"}
         borderColor={"lightgray"}
         borderWidth={"medium"}
         borderRadius={"3rem"}
         backgroundColor={"#208220"}
         icon={<AiFillCamera color="white" size={30} />}

         onClick={() => setCaptureEnable(true)}
         /> 
    
      )}
      {isCaptureEnable && (
        <>
          <div>
            <button onClick={() => setCaptureEnable(false)}>end </button>
          </div>
          
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Webcam
              audio={false}
              width={540}
              height={360}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
            </HStack>
          </Flex>
          <button onClick={capture}>capture</button>
        </>
      )}
      {url && (
        <>
          <div>
            <button
              onClick={() => {
                setUrl(null);
              }}
            >
              delete
            </button>
          </div>
          <div>
            <img src={url} alt="Screenshot" />
          </div>
        </>
      )}
    </React.Fragment>
  );
};
export default CamComponents;
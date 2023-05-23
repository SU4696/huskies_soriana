import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

import { IconButton, Flex, HStack, Button, Link } from "@chakra-ui/react";
import { AiFillCamera, AiFillDelete, AiOutlineLeft } from "react-icons/ai";
import { useRouter } from "next/router";

const videoConstraints = {
    width: 720,
    height: 1200,  
    facingMode: "user"

};

const CamComponents = () => {
  const [isCaptureEnable, setCaptureEnable] = useState<boolean>(false);
  const webcamRef = useRef<Webcam>(null);
  const router = useRouter();
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
         zIndex={10}
         aria-label="Camera"
         variant="outline"
         size={"lg"}
         borderColor={"lightgray"}
         borderWidth={"medium"}
         borderRadius={"3rem"}
         backgroundColor={"#208220"}
         position={"fixed"}
         bottom={"50px"}
         right={"25px"}
         icon={<AiFillCamera color="white" size={30} />}
         
         onClick={() => setCaptureEnable(true)}
         /> 
    
      )}
      {isCaptureEnable && (
        <>
          <div>
          <Link href={"/main"}>
            <IconButton 
            aria-label="goBack"
            variant="outline"
            size={"xs"}
            borderWidth={"medium"}
            borderRadius={"3rem"}
            backgroundColor={"#FFFFFF"}
            padding={"2px"}
            position={"fixed"}
            top={"200px"}
            left={"25px"}
            icon={<AiOutlineLeft color="black" size={15} />}

            onClick={() => setCaptureEnable(false)}
            />
            </Link>
          </div>
          
          <Flex alignItems="center" justifyContent="center" mx="auto">
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
          
          <Flex justifyContent={"center"}>
          <Button
         aria-label="capture"
         variant="outline"
         borderRadius={"50%"}
         backgroundColor={"#FFFFFF"}
         outlineColor={"#FFFFFF"}
         position={"fixed"}
         justifyContent ={"center"}
         alignItems = {"center"}
         bottom={"50px"}
         width={"60px"}
         height={"60px"}
         onClick={capture}
         /> 
         </Flex>
          
        </>
      )}
      {url && (
        <>
          <div>
          <IconButton 
            style={{
              position: "absolute",
              top: "70%",
            }}
            aria-label="delete"
            variant="outline"
            size={"xs"}
            borderWidth={"medium"}
            borderRadius={"3rem"}
            backgroundColor={"#FFFFFF"}
            padding={"2px"}
            position={"fixed"}
            bottom={"50px"}
            right={"25px"}
            icon={<AiFillDelete color="black" size={15} />}

            onClick={() => {
              setUrl(null);
            }}
            />

            
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
import React, { useState } from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';

import ScrollAnimation from "react-animate-on-scroll";
function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText("pariharlucky41@gmail.com");
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">

      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn" >
          <div className="BigCard">
            <Email>
              <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
                <span>pariharlucky41@gmail.com</span>
                <Tooltip
                  PopperProps={{
                    disablePortal: true,
                  }}
                  open={showTooltip}
                  onClose={() => setShowTooltip(false)}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  disableFocusListener
                  disableHoverListener
                  disableTouchListener
                  placement="bottom"
                >
                  <IconButton  onClick={copyToClipboard} >
                    <MdContentCopy size={25} style={{ cursor: 'pointer', color: "#151418" }}/>
                  </IconButton>
                </Tooltip>
              </div>
              <a
                className="btn PrimaryBtn btn-shadow"
                href="mailto:pariharlucky41@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
              <div style={{display:"flex",gap:"5rem",flexWrap:"wrap",justifyContent:"center",marginTop:"1rem"}}>
                <a className="btn SecondaryBtn btn-shadow" style={{margin:0}} href="https://twitter.com/LuckyPa37708806" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a className="btn SecondaryBtn btn-shadow" style={{margin:0}} href="https://www.linkedin.com/in/lucky-parihar-b90425208/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="btn SecondaryBtn btn-shadow" style={{margin:0}} href="https://github.com/Luckyparihar11" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </Email>
          </div>
        </ScrollAnimation>

      </div>
    </ContactWrapper>
  );
}

export default Contact;

import React from "react";
import "./videoFooter.css";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@DiogoRafael Ebac</h3>
        <p>Descrição do Video</p>
        <div className="videoFooter__music">
          <AudiotrackIcon className="videoFooter__icon" />
          <div className="videoFooterMusic_text">
            <p>titulo do audio</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="00000"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;

import React from "react";
import { Card, Image } from "semantic-ui-react";

const GuideImage = (props) => {
    return (
        <div>
            <Card>
                <Image src={props.src} alt="photo of your uploaded guide" />
            </Card>
        </div>
    );
};

export default GuideImage;
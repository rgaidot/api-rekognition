import AWS from 'aws-sdk';
import { aws } from 'config';

AWS.config.update(aws);

AWS.config.apiVersions = {
    rekognition: '2016-06-27',
};

export default AWS;

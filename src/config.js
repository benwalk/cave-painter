export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-west-2",
    BUCKET: "cave-painter-client-attachments"
  },
  apiGateway: {
    REGION: "us-west-2",
    URL: "https://fq8yl3rkw7.execute-api.us-west-2.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-west-2",
    USER_POOL_ID: "us-west-2_ed0Z5Yyfb",
    APP_CLIENT_ID: "5qngiohd76q80mrflfmf02cg74",
    IDENTITY_POOL_ID: "b9d3ae21-62f4-400b-b97a-f2441591a251"
  }
};

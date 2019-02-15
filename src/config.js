const dev = {
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
    IDENTITY_POOL_ID: "us-west-2:b9d3ae21-62f4-400b-b97a-f2441591a251"
  },
  graphql: {
    URL: "https://fq8yl3rkw7.execute-api.us-west-2.amazonaws.com/dev/graphql"
  },
  STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY"
};

const prod = {
  s3: {
    REGION: "YOUR_PROD_S3_UPLOADS_BUCKET_REGION",
    BUCKET: "YOUR_PROD_S3_UPLOADS_BUCKET_NAME"
  },
  apiGateway: {
    REGION: "YOUR_PROD_API_GATEWAY_REGION",
    URL: "YOUR_PROD_API_GATEWAY_URL"
  },
  cognito: {
    REGION: "YOUR_PROD_COGNITO_REGION",
    USER_POOL_ID: "YOUR_PROD_COGNITO_USER_POOL_ID",
    APP_CLIENT_ID: "YOUR_PROD_COGNITO_APP_CLIENT_ID",
    IDENTITY_POOL_ID: "YOUR_PROD_IDENTITY_POOL_ID"
  },
  STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

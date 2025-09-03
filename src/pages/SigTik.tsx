import { Helmet } from "react-helmet-async";

const SigTik = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Helmet>
        <title>TikTok Verification | EffortZero</title>
        <meta name="tiktok-developers-site-verification" content="0kvNrLo5JxaDZIEFGTBHRh3y449QA3VI" />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground">TikTok Site Verification</h1>
        <p className="text-muted-foreground mt-4">This page is for TikTok site verification purposes.</p>
      </div>
    </div>
  );
};

export default SigTik;
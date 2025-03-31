import React from "react";
import Image from "next/image";
import { TextField, Button } from '@mui/material';

function LoginPage() {
  return (
    <div className="max-w-full h-[1090px] flex">
      <div className="w-[30%] bg-amber-200 flex flex-col items-center justify-center p-8">
        <Image
          src="/assets/logo-one-platform.png"
          alt="logo-one-platform"
          className="mb-4 top-0"
          width={100}
          height={100}
        />
        <h1 className="text-2xl font-bold">Admin User Management</h1>
        <Image
          src="/assets/img_login_RA_new.png"
          alt="logo-one-platform"
          className="mb-4"
          width={500}
          height={500}
        />
      </div>
      <div className="w-[70%] bg-fuchsia-300">
        <form className="w-full max-w-md p-8">
          <div className="mb-6">
            <TextField
              fullWidth
              id="username"
              label="Username"
              variant="outlined"
              size="medium"
            />
          </div>
          <div className="mb-6">
            <TextField
              fullWidth
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              size="medium"
            />
          </div>
          <Button fullWidth variant="contained" size="large" type="submit" sx={{  backgroundColor: '#5A6ACF'}} > 
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

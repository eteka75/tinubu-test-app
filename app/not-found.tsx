"use client";

import { FC } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Typography,
  Container,
  Card,
  CardContent,
} from "@mui/material";
import "@/app/globals.css";

const NotFoundPage: FC = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{
          padding: 3,

          textAlign: "center",
          backgroundColor: "white",
          borderRadius: 4,
          boxShadow: 1,
          border: "1px solid #dedede",
        }}
      >
        <CardContent>
          <Typography variant="h1" sx={{ fontWeight: "bold" }}>
            404
          </Typography>
          <Typography variant="h5" gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            The page you are looking for does not exist or has been moved.
          </Typography>
          <Button onClick={handleGoHome} variant="contained" color="primary">
            Go to Home
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default NotFoundPage;

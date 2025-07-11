"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Box,
  Skeleton,
  Stack,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useAssets from "@/hooks/useAssets";
import CreateAssetDialog from "./CreateAssetDialog";
import CommonPagination from "@/common/CommonPagination";

const Assets = () => {
  const {
    assets,
    total,
    page,
    pageSize,
    fetchAssets,
    setPage,
    createAsset,
    loading,
  } = useAssets();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchAssets(page, pageSize);
    // eslint-disable-next-line
  }, [page, pageSize]);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h5" fontWeight={600}>
          Assets
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Add Asset
        </Button>
      </Box>
      {loading ? (
        <Grid container spacing={2}>
          {Array.from({ length: pageSize }).map((_, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <Card>
                <CardContent>
                  <Stack spacing={1}>
                    <Skeleton variant="text" width="60%" height={32} />
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="rectangular" width="100%" height={120} />
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : assets.length === 0 ? (
        <Box textAlign="center" mt={6}>
          <Typography variant="h6" color="text.secondary">
            No Assets found
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={2}>
          {assets.map((asset) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={asset.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{asset.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {asset.description}
                  </Typography>
                  <Typography variant="subtitle2">
                    Price: ${asset.price}
                  </Typography>
                  <Typography variant="subtitle2">
                    Owner: {asset.owner}
                  </Typography>
                  <Typography variant="subtitle2">
                    Type: {asset.type}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Purchased: {asset.purchaseDate?.slice(0, 10)}
                  </Typography>
                  {asset.assetUrl && (
                    <img
                      src={asset.assetUrl}
                      alt={asset.name}
                      style={{ width: "100%", marginTop: 8 }}
                    />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
      <CommonPagination
        page={page}
        count={Math.ceil(total / pageSize)}
        onChange={setPage}
      />
      <CreateAssetDialog
        open={open}
        onClose={() => setOpen(false)}
        onCreate={createAsset}
      />
    </>
  );
};

export default Assets;

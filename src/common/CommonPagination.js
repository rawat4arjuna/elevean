import React from "react";
import { Pagination, Stack } from "@mui/material";

const CommonPagination = ({ page, count, onChange }) => (
  <Stack alignItems="center" mt={2}>
    <Pagination
      color="primary"
      page={page}
      count={count}
      onChange={(_, value) => onChange(value)}
      showFirstButton
      showLastButton
    />
  </Stack>
);

export default CommonPagination;

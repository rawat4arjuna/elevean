import { useState, useCallback } from "react";
import API from "@/axios/axiosInstance";
import { ASSET_API } from "@/axios/urls";

export default function useAssets() {
  const [assets, setAssets] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);

  const fetchAssets = useCallback(async (pageNum = 1, size = 10) => {
    setLoading(true);
    try {
      const res = await API.get(
        `${ASSET_API}?page=${pageNum}&pageSize=${size}`
      );
      setAssets(res.data.data);
      setTotal(res.data.total);
      setPage(res.data.page);
      setPageSize(res.data.pageSize);
    } finally {
      setLoading(false);
    }
  }, []);

  const createAsset = useCallback(
    async (payload) => {
      await API.post(ASSET_API, payload);
      fetchAssets(page, pageSize);
    },
    [fetchAssets, page, pageSize]
  );

  return {
    assets,
    total,
    page,
    pageSize,
    loading,
    fetchAssets,
    setPage,
    setPageSize,
    createAsset,
  };
}

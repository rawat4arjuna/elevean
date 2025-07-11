"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Stack,
} from "@mui/material";

const assetTypes = ["Image", "SVG", "Document", "Other"];

const CreateAssetDialog = ({ open, onClose, onCreate }) => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    owner: "",
    purchaseDate: "",
    assetUrl: "",
    type: "Image",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ ...form, price: parseFloat(form.price) });
    onClose();
    setForm({
      name: "",
      description: "",
      price: "",
      owner: "",
      purchaseDate: "",
      assetUrl: "",
      type: "Image",
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Asset</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Stack spacing={2}>
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              value={form.description}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Price"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
              type="number"
              fullWidth
            />
            <TextField
              label="Owner"
              name="owner"
              value={form.owner}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              label="Purchase Date"
              name="purchaseDate"
              value={form.purchaseDate}
              onChange={handleChange}
              required
              type="date"
              InputLabelProps={{ shrink: true }}
              fullWidth
            />
            <TextField
              label="Asset URL"
              name="assetUrl"
              value={form.assetUrl}
              onChange={handleChange}
              fullWidth
            />
            <TextField
              select
              label="Type"
              name="type"
              value={form.type}
              onChange={handleChange}
              fullWidth
            >
              {assetTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateAssetDialog;

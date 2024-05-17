"use client";
import React from "react";
import { useFormik } from "formik";
import { useState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { create, index } from "@/api/actions";
import { useMemoryStore } from "@/lib/memoriesStore";

export default function AddMemory() {
  const [memoryAdded, setMemoryAdded] = useState("");
  const setMemories = useMemoryStore((state: any) => state.setData);
  interface MyFormValues {
    name: string;
    memory: string;
  }
  const initialValues: MyFormValues = { name: "", memory: "" };

  const nameInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (nameInput.current) nameInput.current.focus();
  }, []);
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values, { setSubmitting }) => {
      create(values.name, values.memory).then(() => {
        index().then((e) => {
          setMemories(e);
        });
        values.name = "";
        values.memory = "";
        setMemoryAdded("# Memory has added successfully thank you <3");
        setSubmitting(false);
      });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex gap-2">
        <label htmlFor="name" className="opacity-80">
          Your name*
        </label>
        <input
          required
          id="name"
          name="name"
          ref={nameInput}
          onChange={formik.handleChange}
          value={formik.values.name}
          className="bg-gray-950 focus:bg-gray-950 active:bg-gray-950 border-none outline-none"
          type="text"
        />
      </div>

      <div className="flex gap-2 mt-4">
        <label htmlFor="memory" className="opacity-80">
          Your Memory*
        </label>
        <input
          required
          id="memory"
          name="memory"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.memory}
          className="bg-gray-950 focus:bg-gray-950 active:bg-gray-950 border-none outline-none w-full max-w-[650px]"
        />
      </div>

      <div className="my-3">
        <Button type="submit" size={"sm"} disabled={formik.isSubmitting}>
          ADD MEMORY
        </Button>
      </div>
      <span className="opacity-80">{memoryAdded}</span>
    </form>
  );
}

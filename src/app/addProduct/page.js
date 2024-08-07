//app\addProduct\page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) {
      alert("Name and image are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, image, price, category }),
      });

      if (res.ok) {
        router.push("/products");
        // router.push("/");
      } else {
        throw new Error("Failed to create a Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center ml-24">
        <h1 className="font-bold py-10 text-2xl">Add New Product</h1>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-10 ml-24">
  <div className="sm:col-span-3">
    <label
      htmlFor="first-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      ยุทธศาสตร์ชาติ
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Name"
        />

      {/* <input
        type="text"
        name="first-name"
        id="first-name"
        autoComplete="given-name"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      /> */}
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      โครงการ
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setImage(e.target.value)}
          value={image}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="/images/1.jpg"
          defaultValue="/images/1.jpg"
        />
      
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      หน่วยงานที่นำนโยบายไปปฎิบัติ
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          className="input input-bordered input-accent w-full max-w-xs"
          type="number"
          placeholder="1"
          defaultValue="1"
        />
      
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      Gmail
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        />
      
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      โทรศัพท์
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        />
      
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      งบประมาณ(ล้านบาท)
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        />
      
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      ปีงบประมาณ
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        />
      
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      ผลประเมิน
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        />
      
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      จุดแข็ง
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        />
      
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      จุดอ่อน
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        />
      
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      แนวทางเสริม(จุดแข็ง)
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        />
      
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      ข้อที่ควรปรับปรุง(จุดอ่อน)
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        />
      
    </div>
  </div>
  <div className="sm:col-span-3">
    <label
      htmlFor="last-name"
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      ข้อเสนอแนะ
    </label>
    <div className="mt-2">
    <input
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
          placeholder="Product Category"
        />
      
    </div>
  </div>
</div>

        

        <button type="submit" className="btn btn-primary w-full max-w-xs ml-24">
          Add Product
        </button>
      </form>
    </>
  );
}

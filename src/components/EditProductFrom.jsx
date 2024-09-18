//components\EditProductForm.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditProductForm({
  id,
  name,
  project,
  implementation,
  email,
  mobile,
  budget,
  year,
  evaluation,
  weak,
  strength,
  development,
  suggestion,
}) {
  const [newName, setNewTitle] = useState(name);
  const [newProject, setNewProject] = useState(project);
  const [newImplementation, setNewimplementation] = useState(implementation);
  const [newEmail, setNewEmail] = useState(email);
  const [newMobile, setNewMobile] = useState(mobile);
  const [newBudget, setNewBudget] = useState(budget);
  const [newYear, setNewYear] = useState(year);
  const [newEvaluation, setNewEvaluation] = useState(evaluation);
  const [newWeak, setNewWeak] = useState(weak);
  const [newStrength, setNewStrength] = useState(strength);
  const [newDevelopment, setNewDevelopment] = useState(development);
  const [newSuggestion, setNewSuggestion] = useState(suggestion);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          newName,
          newProject,
          newImplementation,
          newEmail,
          newMobile,
          newBudget,
          newYear,
          newEvaluation,
          newWeak,
          newStrength,
          newDevelopment,
          newSuggestion,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update Product");
      }

      router.refresh();
      router.push("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold py-10 text-2xl">Update Product</h1>
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
            {/* <div className="mt-2">
              <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newName}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
              />
            </div> */}
            <div className="mt-2">
              <select
                onChange={(e) => setNewTitle(e.target.value)}
                value={newName}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
              >
                <option disabled selected>
                  ดัชนีแผนแม่บทด้านความมั่นคง
                </option>
                <option>ดัชนีสันติภาพโลก</option>
                <option>ดัชนีความสุขโลก</option>
                <option>ดัชนีสิทธิมนุษยชนและหลักนิติธรรม</option>
                <option>ดัชนีเสถียรภาพทางการเมือง</option>
                <option>ดัชนีการมีสิทธิมีเสียงของประชาชนและการรับผิดชอบ</option>
                <option>ดัชนีปลอดภัยจากภัยคุกคาม</option>
                <option>ดัชนีความสงบสุขภาคใต้</option>
                <option>
                  ดัชนีประสิทธิภาพของหน่วยงานด้านการข่าวและประชาคมข่าวกรอง
                </option>
                <option>ดัชนีความแข็งแกร่งทางกำลังทหาร</option>
                <option>ดัชนีรัฐเปราะบาง</option>
                <option>
                  ดัชนีจำนวนเป้าหมายย่อยของเป้าหมายการพัฒนาที่ยั่งยืนในเป้าหมายที่
                  17 บรรลุตามที่กำหนด
                </option>
                <option>
                  ดัชนีระดับประสิทธิภาพการดำเนินงานของหน่วยงานด้านการจัดการความมั่นคง
                </option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              โครงการ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setNewProject(e.target.value)}
                value={newProject}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              หน่วยงานที่นำนโยบายไปปฏิบัติ
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setNewimplementation(e.target.value)}
                value={newImplementation}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              อีเมล
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => setNewEmail(e.target.value)}
                value={newEmail}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
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
                onChange={(e) => setNewMobile(e.target.value)}
                value={newMobile}
                className="input input-bordered input-accent w-full max-w-xs"
                type="number"
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
                onChange={(e) => setNewBudget(e.target.value)}
                value={newBudget}
                className="input input-bordered input-accent w-full max-w-xs"
                type="number"
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
                onChange={(e) => setNewYear(e.target.value)}
                value={newYear}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
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
                onChange={(e) => setNewEvaluation(e.target.value)}
                value={newEvaluation}
                className="input input-bordered input-accent w-full max-w-xs"
                type="number"
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
              <textarea
                onChange={(e) => setNewWeak(e.target.value)}
                value={newWeak}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
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
              <textarea
                onChange={(e) => setNewStrength(e.target.value)}
                value={newStrength}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
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
              <textarea
                onChange={(e) => setNewDevelopment(e.target.value)}
                value={newDevelopment}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
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
              <textarea
                onChange={(e) => setNewSuggestion(e.target.value)}
                value={newSuggestion}
                className="input input-bordered input-accent w-full max-w-xs"
                type="text"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <div className="mt-2">
              <button className="btn btn-primary w-full max-w-xs ">
                Update Product
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

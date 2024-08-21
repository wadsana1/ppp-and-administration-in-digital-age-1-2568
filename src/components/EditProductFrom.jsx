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
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newName}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <input
          onChange={(e) => setNewProject(e.target.value)}
          value={newProject}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewimplementation(e.target.value)}
          value={newImplementation}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewEmail(e.target.value)}
          value={newEmail}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewMobile(e.target.value)}
          value={newMobile}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewBudget(e.target.value)}
          value={newBudget}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewYear(e.target.value)}
          value={newYear}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewEvaluation(e.target.value)}
          value={newEvaluation}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewWeak(e.target.value)}
          value={newWeak}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewStrength(e.target.value)}
          value={newStrength}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewDevelopment(e.target.value)}
          value={newDevelopment}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />
        <input
          onChange={(e) => setNewSuggestion(e.target.value)}
          value={newSuggestion}
          className="input input-bordered input-accent w-full max-w-xs"
          type="text"
        />

        <button className="btn btn-primary w-full max-w-xs">
          Update Product
        </button>
      </form>
    </>
  );
}

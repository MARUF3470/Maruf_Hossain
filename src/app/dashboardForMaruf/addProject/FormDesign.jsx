"use client";
import React from "react";
import { BsFillTrash2Fill } from "react-icons/bs";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
const FormDesign = () => {
  const {
    handleSubmit,
    register,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const {
    fields: technologiesFields,
    append: technologiesAppend,
    remove: technologiesRemove,
  } = useFieldArray({ control, name: "technologies" });
  const {
    fields: pictureFields,
    append: pictureAppend,
    remove: pictureRemove,
  } = useFieldArray({ control, name: "pictures" });
  const handleProjectUpload = async ({
    name,
    description,
    type,
    liveSite,
    clientSide,
    serverSide,
    pictures,
    features,
    technologies,
  }) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("liveSite", liveSite);
    formData.append("clientSide", clientSide);
    formData.append("serverSide", serverSide);
    formData.append("technologies", technologies);
    for (let i = 0; i < pictures.length; i++) {
      formData.append(`images[${i}]`, pictures[i][0]);
      formData.append(`features[${i}]`, features[i]);
    }
    const data = await fetch("http://localhost:3000/api/projects", {
      method: "POST",
      body: formData,
    });
    const result = await data.json();
    if (result.success) {
      reset();
      return toast.success("Uploaded");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleProjectUpload)}
        className="mx-auto my-10 p-8"
      >
        <label htmlFor="name" className="text-xs">
          Project Name *<br />
          <input
            type="text"
            {...register("name", {
              required: "Please Provide Project Name",
            })}
            placeholder="Enter Project Name"
            className="input text-xs input-bordered w-3/4 lg:w-1/2 block py-2 px-4 rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </label>
        <label htmlFor="Description" className="text-xs">
          Description *<br />
          <textarea
            {...register("description", {
              required: "Provide Project Description",
            })}
            placeholder="Enter Project Details"
            className="input text-xs input-bordered w-full h-48 py-2 px-4 rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
          />
          {errors.description && (
            <p className="text-red-500">{errors.description.message}</p>
          )}
        </label>
        <label className="label">
          <span className="label-text text-xs">Type *</span>
        </label>
        <select
          className="select select-bordered text-xs rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
          {...register("type", { required: "Select One" })}
        >
          <option value="">Select One</option>
          <option value="Web Application">Web Application</option>
          <option value="Mobile Application">Mobile Application</option>
        </select>
        {errors.type && (
          <p className="text-xs text-red-500">{errors.type.message}</p>
        )}
        <label htmlFor="liveSite" className="text-xs">
          Project Live Link *<br />
          <input
            type="text"
            {...register("liveSite", {
              required: "Please Provide Project Live Link",
            })}
            placeholder="Enter Project Live Link"
            className="input text-xs input-bordered w-3/4 lg:w-1/2 block py-2 px-4 rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
          />
          {errors.name && (
            <p className="text-red-500">{errors.liveSite.message}</p>
          )}
        </label>
        <label htmlFor="clientSide" className="text-xs">
          Project Client Side Code Link *<br />
          <input
            type="text"
            {...register("clientSide", {
              required: "Please Provide Project Client Side Code Link",
            })}
            placeholder="Enter Project Client Side Code Link"
            className="input text-xs input-bordered w-3/4 lg:w-1/2 block py-2 px-4 rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
          />
          {errors.name && (
            <p className="text-red-500">{errors.clientSide.message}</p>
          )}
        </label>
        <label htmlFor="serverSide" className="text-xs">
          Project Server Side Code Link *<br />
          <input
            type="text"
            {...register("serverSide", {
              required: "Please Provide Project Server Side Code Link",
            })}
            placeholder="Enter Project Server Side Code Link"
            className="input text-xs input-bordered w-3/4 lg:w-1/2 block py-2 px-4 rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
          />
          {errors.name && (
            <p className="text-red-500">{errors.serverSide.message}</p>
          )}
        </label>
        <div>
          <div>
            {technologiesFields.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="flex items-center w-3/4 lg:w-1/3 mt-3 gap-2"
                >
                  <input
                    className="input text-xs input-bordered  block py-2 px-4 rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
                    type="text"
                    placeholder="Add Technology"
                    {...register(`technologies[${index}]`, {
                      required: "Upload Project features",
                    })}
                  />
                  {errors.pictures && (
                    <p className="text-red-500">{errors.pictures.message}</p>
                  )}
                  <button
                    type="submit"
                    onClick={() => technologiesRemove(index)}
                    className="rounded-full mt-4 bg-red-500/20 border border-red-500 group transition-all hover:bg-red-500"
                  >
                    <BsFillTrash2Fill
                      className="text-red-500 group-hover:text-white transition-all"
                      size="20"
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <div>
            <button
              type="button"
              onClick={() => technologiesAppend("")}
              className="btn btn-xs rounded-sm mt-5"
            >
              Technologies *
            </button>
          </div>
        </div>
        <div>
          <div>
            {pictureFields.map((item, index) => {
              return (
                <div key={item.id} className="flex items-center gap-2">
                  <input
                    className="mt-3 text-xs"
                    type="file"
                    {...register(`pictures[${index}]`, {
                      required: "Upload Project Pictures",
                    })}
                  />
                  <input
                    className="input text-xs input-bordered w-3/4 lg:w-1/2 block py-2 px-4 rounded-sm mt-1 focus:outline-none focus:border-violet-700 transition duration-500 flex-grow"
                    type="text"
                    placeholder="Add Feature"
                    {...register(`features[${index}]`, {
                      required: "Upload Project features",
                    })}
                  />
                  {errors.pictures && (
                    <p className="text-red-500">{errors.pictures.message}</p>
                  )}
                  <button
                    type="submit"
                    onClick={() => pictureRemove(index)}
                    className="rounded-full mt-4 bg-red-500/20 border border-red-500 group transition-all hover:bg-red-500"
                  >
                    <BsFillTrash2Fill
                      className="text-red-500 group-hover:text-white transition-all"
                      size="20"
                    />
                  </button>
                </div>
              );
            })}
          </div>
          <div>
            <button
              type="button"
              onClick={() => pictureAppend("")}
              className="btn btn-xs rounded-sm mt-5"
            >
              Add picture *
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="SUBMIT"
            className="btn rounded-sm mt-4 bg-violet-700 text-white text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default FormDesign;

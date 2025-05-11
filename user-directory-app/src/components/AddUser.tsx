
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  age: z.number().min(18, "Must be at least 18"), 
});

type FormData = z.infer<typeof schema>;

export default function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { addUser } = useContext(UserContext);

  const onSubmit = (data: FormData) => {
    addUser(data); 
  };

  return (
    <div className="p-4 max-w-md">
      <h1 className="text-xl font-bold mb-4">Add User</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input {...register("name")} placeholder="Name" className="w-full border p-2" />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}

        <input {...register("email")} placeholder="Email" className="w-full border p-2" />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}

        <input
          type="number"
          {...register("age")}
          placeholder="Age"
          className="w-full border p-2"
        />
        {errors.age && <p className="text-red-600">{errors.age.message}</p>}

        <button className="bg-purple-500 text-white px-4 py-2">Submit</button>
      </form>
    </div>
  );
}

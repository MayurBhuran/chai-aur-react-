import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Type, select, RTE } from "../index";
import appwritService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm() {
  const { register, handleSubmit, control, watch, setValue, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submiy = async (data) => {
    if (post) {
      data.image[0] ? appwritService.uploadFile(data.image[0]) : null;

      if (file) {
        appwritService.deletefile(post.featuredImageId);
      }
      const dbPost = await appwritService.updatePost(post.$id, {
        ...data,
        featuredImageId: file ? file.$id : undefined,
      });

      if (dbPost) {
        featuredImageId: (file ? file.$id : undefined,
          navigate(`/post/${dbPost.slug}`));
      }
    } else {
      const file = await appwritService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImageId = fileId;
        await appwritService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.slug}`);
        }
      }
    }
    const slugTransform = useCallback((value) => {
      return value
        .toLowerCase()
        .replace(/^[a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

        return ''
    }, [])
  };

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === "title") {
        const slug = slugTransform(value.title,{shouldValidate: true});
        setValue("slug", slug);
      } 
    });
    return () =>
       subscription.unsubscribe();  


  },[watch,slugTransform,setValue])
 
 
 return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform
                          (e.currentTarget.value), 
                          { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwritService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}

export default PostForm;

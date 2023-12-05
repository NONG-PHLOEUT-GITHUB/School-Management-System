<?php

namespace App\Services;

use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManagerStatic as Image;

class ImageService
{
    public function updateImage($model, $request, $path, $methodType)
    {
        $image = Image::make($request->file('image'));

        if (!empty($model->image)) {
            $currentImage = public_path() . $path . $model->image;

            if (File::exists($currentImage)) {
                File::delete($currentImage);
            }
        }

        $file = $request->file('image');
        $extension = $file->getClientOriginalExtension();

        // $image->crop(
        //     $request->width,
        //     $request->height,
        //     $request->left,
        //     $request->top
        // );

        $name = time() . '.' . $extension;
        $image->save(public_path() . $path . $name);

        if ($methodType === 'store') {
            $model->user_id = $request->get('user_id');
        }

        $model->image = $name;

        $model->save();
    }
}

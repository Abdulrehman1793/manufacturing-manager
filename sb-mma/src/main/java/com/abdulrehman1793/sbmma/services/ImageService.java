package com.abdulrehman1793.sbmma.services;

import com.abdulrehman1793.sbmma.model.Image;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface ImageService {
    Image saveImage(MultipartFile imageFile) throws IOException;
}

package com.abdulrehman1793.sbmma.services.impl;

import com.abdulrehman1793.sbmma.exceptions.BadRequestException;
import com.abdulrehman1793.sbmma.model.Image;
import com.abdulrehman1793.sbmma.repository.ImageRepository;
import com.abdulrehman1793.sbmma.services.FileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class ImagServiceImpl implements FileService {

    private final ImageRepository imageRepository;

    @Override
    public Image upload(MultipartFile imageFile) throws IOException {
        if (imageFile == null || imageFile.isEmpty()) {
            throw new BadRequestException("Please select a file to upload.");
        }
        // Check if the uploaded file is an image
        if (!Objects.requireNonNull(imageFile.getContentType()).startsWith("image/")) {
            throw new BadRequestException("Only image files are allowed.");
        }

        // Generate a unique file name to avoid overwriting existing files
        String fileName = StringUtils.cleanPath(Objects.requireNonNull(imageFile.getOriginalFilename()));
        String uniqueFileName = System.currentTimeMillis() + "_" + fileName;

        Image image = Image.builder()
                .imageData(imageFile.getBytes())
                .fileName(uniqueFileName)
                .size(imageFile.getSize())
                .build();

        return imageRepository.save(image);
    }
}

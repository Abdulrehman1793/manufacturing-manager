package com.abdulrehman1793.sbmma.services.impl;

import com.abdulrehman1793.sbmma.exceptions.BadRequestException;
import com.abdulrehman1793.sbmma.model.ProductType;
import com.abdulrehman1793.sbmma.model.PurchaseUnit;
import com.abdulrehman1793.sbmma.model.RawGoods;
import com.abdulrehman1793.sbmma.model.UnitOfMeasure;
import com.abdulrehman1793.sbmma.repository.ProductTypeRepository;
import com.abdulrehman1793.sbmma.repository.PurchaseUnitRepository;
import com.abdulrehman1793.sbmma.repository.RawGoodsRepository;
import com.abdulrehman1793.sbmma.repository.UnitOfMeasureRepository;
import com.abdulrehman1793.sbmma.services.RawGoodsService;
import com.abdulrehman1793.sbmma.web.mappers.RawGoodsMapper;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import com.abdulrehman1793.sbmma.web.model.RawGoodsDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class RawGoodsServiceImpl implements RawGoodsService {

    private final PurchaseUnitRepository purchaseUnitRepository;
    private final UnitOfMeasureRepository unitOfMeasureRepository;
    private final ProductTypeRepository productTypeRepository;
    private final RawGoodsRepository goodsRepository;
    private final RawGoodsMapper goodsMapper;

    @Override
    public PagedResponse<RawGoodsDto> findAll(Pageable pageable) {
        Page<RawGoods> page = goodsRepository.findAll(pageable);

        return new PagedResponse<>(
                page.stream()
                        .map(goodsMapper::toDto)
                        .toList(),
                PageRequest.of(
                        page.getPageable().getPageNumber(),
                        page.getPageable().getPageSize(),
                        page.getSort()),
                page.getTotalElements()
        );
    }

    @Override
    public String create(RawGoodsDto goodsDto) {
        RawGoods rawGoods = goodsMapper.toEntity(goodsDto);

        ProductType productType = productTypeRepository.findById(goodsDto.getType())
                .orElseThrow(() -> new BadRequestException("Product type not found"));

        UnitOfMeasure unitOfMeasure = unitOfMeasureRepository.findById(goodsDto.getUom())
                .orElseThrow(() -> new BadRequestException("Unit of measures not found"));

        PurchaseUnit purchaseUnit = purchaseUnitRepository.findById(goodsDto.getUom())
                .orElseThrow(() -> new BadRequestException("Purchase unit not found"));

        rawGoods.setUom(unitOfMeasure);
        rawGoods.setType(productType);
        rawGoods.setPurchaseUnit(purchaseUnit);

        rawGoods = goodsRepository.save(rawGoods);

        return String.valueOf(rawGoods.getId());
    }

    @Override
    public void update(int id, RawGoodsDto goodsDto) {
        RawGoods rawGoods = goodsRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Raw goods could not be found"));

        ProductType productType = rawGoods.getType();
        UnitOfMeasure unitOfMeasure = rawGoods.getUom();
        PurchaseUnit purchaseUnit = rawGoods.getPurchaseUnit();

        if (rawGoods.getType() != null && goodsDto.getType().equals(rawGoods.getType().getId()))
            productType = productTypeRepository.findById(goodsDto.getType())
                    .orElseThrow(() -> new BadRequestException("Product type not found"));

        if (rawGoods.getUom() != null && goodsDto.getUom().equals(rawGoods.getUom().getId()))
            unitOfMeasure = unitOfMeasureRepository.findById(goodsDto.getUom())
                    .orElseThrow(() -> new BadRequestException("Unit of measures not found"));

        if (rawGoods.getPurchaseUnit() != null && goodsDto.getPurchaseUnit().equals(rawGoods.getPurchaseUnit().getId()))
            purchaseUnit = purchaseUnitRepository.findById(goodsDto.getUom())
                    .orElseThrow(() -> new BadRequestException("Purchase unit not found"));

        RawGoods newRawGoods = goodsMapper.toEntity(goodsDto);

        if (newRawGoods.equals(rawGoods))
            throw new BadRequestException("No changes detected");

        rawGoods.setName(newRawGoods.getName());
        rawGoods.setUpc(newRawGoods.getUpc());
        rawGoods.setReorderQty(newRawGoods.getReorderQty());
        rawGoods.setMinQty(newRawGoods.getMinQty());
        rawGoods.setQtyOnHand(newRawGoods.getQtyOnHand());
        rawGoods.setAmount(newRawGoods.getAmount());
        rawGoods.setPurchaseUnitQty(newRawGoods.getPurchaseUnitQty());

        rawGoods.setType(productType);
        rawGoods.setUom(unitOfMeasure);
        rawGoods.setPurchaseUnit(purchaseUnit);

        goodsRepository.save(rawGoods);
    }

    @Override
    public void delete(int id) {
        RawGoods goods = goodsRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Raw goods could not be found"));

        goodsRepository.delete(goods);
    }
}

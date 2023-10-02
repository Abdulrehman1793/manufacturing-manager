package com.abdulrehman1793.sbmma.services.impl;

import com.abdulrehman1793.sbmma.exceptions.BadRequestException;
import com.abdulrehman1793.sbmma.model.FinishedGoods;
import com.abdulrehman1793.sbmma.model.ProductType;
import com.abdulrehman1793.sbmma.repository.FinishedGoodsRepository;
import com.abdulrehman1793.sbmma.repository.ProductTypeRepository;
import com.abdulrehman1793.sbmma.services.FinishedGoodsService;
import com.abdulrehman1793.sbmma.web.mappers.FinishedGoodsMapper;
import com.abdulrehman1793.sbmma.web.model.FinishedGoodsDto;
import com.abdulrehman1793.sbmma.web.model.PagedResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FinishedGoodsServiceImpl implements FinishedGoodsService {

    private final ProductTypeRepository productTypeRepository;
    private final FinishedGoodsRepository goodsRepository;
    private final FinishedGoodsMapper goodsMapper;

    @Override
    public PagedResponse<FinishedGoodsDto> findAll(Pageable pageable) {
        Page<FinishedGoods> page = goodsRepository.findAll(pageable);

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
    public String create(FinishedGoodsDto goodsDto) {
        FinishedGoods finishedGoods = goodsMapper.toEntity(goodsDto);

        ProductType productType = productTypeRepository.findById(goodsDto.getType())
                .orElseThrow(() -> new BadRequestException("Product type not found"));

        finishedGoods.setType(productType);
        finishedGoods = goodsRepository.save(finishedGoods);
        return String.valueOf(finishedGoods.getId());
    }

    @Override
    public void update(int id, FinishedGoodsDto goodsDto) {
        FinishedGoods finishedGoods = goodsRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Finished goods could not be found"));

        ProductType productType = finishedGoods.getType();

        if (finishedGoods.getType() != null && goodsDto.getType().equals(finishedGoods.getType().getId()))
            productType = productTypeRepository.findById(goodsDto.getType())
                    .orElseThrow(() -> new BadRequestException("Product type not found"));

        FinishedGoods newFinishedGoods = goodsMapper.toEntity(goodsDto);

        if (newFinishedGoods.equals(finishedGoods))
            throw new BadRequestException("No changes detected");

        finishedGoods.setName(newFinishedGoods.getName());
        finishedGoods.setDescription(newFinishedGoods.getDescription());
        finishedGoods.setBatchQty(newFinishedGoods.getBatchQty());
        finishedGoods.setSalesPrice(newFinishedGoods.getSalesPrice());
        finishedGoods.setBatchCost(newFinishedGoods.getBatchCost());
        finishedGoods.setItemCost(newFinishedGoods.getItemCost());
        finishedGoods.setItemProfit(newFinishedGoods.getItemProfit());
        finishedGoods.setQtyOnHand(newFinishedGoods.getQtyOnHand());
        finishedGoods.setType(productType);

        goodsRepository.save(finishedGoods);
    }

    @Override
    public void delete(int id) {
        FinishedGoods goods = goodsRepository.findById(id)
                .orElseThrow(() -> new BadRequestException("Finished goods could not be found"));

        goodsRepository.delete(goods);
    }
}

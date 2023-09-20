package com.abdulrehman1793.sbmma.repository;

import com.abdulrehman1793.sbmma.model.RawGoods;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class RawGoodsRepositoryTest {
    private final RawGoodsRepository rawGoodsRepository;
    private final ProductTypeRepository productTypeRepository;
    private final UnitOfMeasureRepository unitOfMeasureRepository;

    @Autowired
    public RawGoodsRepositoryTest(RawGoodsRepository rawGoodsRepository,
                                  ProductTypeRepository productTypeRepository,
                                  UnitOfMeasureRepository unitOfMeasureRepository) {
        this.rawGoodsRepository = rawGoodsRepository;
        this.productTypeRepository = productTypeRepository;
        this.unitOfMeasureRepository = unitOfMeasureRepository;
    }

    @Test
    public void testSaveAndGetRawGoods() {
        RawGoods rawGoods = RawGoods.builder()
                .name("Flour")
                .type(productTypeRepository.findById("bkg").orElse(null))
                .upc("123456789093")
                .reorderQty(100)
                .minQty(0)
                .qtyOnHand(100)
                .amount(2.00)
                .purchaseUnitQty(987)
                .uom(unitOfMeasureRepository.findById("g").orElse(null))
                .build();

        rawGoods = rawGoodsRepository.save(rawGoods);

        RawGoods retrievedRawGoods = rawGoodsRepository
                .findById(rawGoods.getId()).orElse(null);

        assertNotNull(retrievedRawGoods);
        assertNotNull(retrievedRawGoods.getType());
        assertNotNull(retrievedRawGoods.getType().getName());
        assertNotNull(retrievedRawGoods.getUom());
        assertNotNull(retrievedRawGoods.getUom().getName());
    }
}
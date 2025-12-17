import React, { useState } from 'react';
import './styles.css';

// Mock данные (в реальном приложении будут приходить с API)
const mockData = {
    cities: [
        { id: 1, name: 'Нинбо', country: 'CN' },
        { id: 2, name: 'Шанхай', country: 'CN' },
        { id: 3, name: 'Москва', country: 'RU' },
        { id: 4, name: 'Санкт-Петербург', country: 'RU' }
    ],
    densityThreshold: 250, // кг/м³
    railTariffs: [
        { minDensity: 0, maxDensity: 200, price: 0.85 },
        { minDensity: 201, maxDensity: 300, price: 0.75 },
        { minDensity: 301, maxDensity: 500, price: 0.65 }
    ],
    shippingSchedule: [
        { date: '2025-01-15', cutOff: '2025-01-13' },
        { date: '2025-01-18', cutOff: '2025-01-16' },
        { date: '2025-01-22', cutOff: '2025-01-20' }
    ]
};

const QPCalculator = () => {
    const [formData, setFormData] = useState({
        fromCity: '',
        toCity: '',
        weight: '',
        volume: '',
        items: '',
        lastMile: false,
        certification: false,
        palletizing: false
    });

    const [calculation, setCalculation] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const [errors, setErrors] = useState({});

    // Валидация формы
    const validateForm = () => {
        const newErrors = {};

        if (!formData.fromCity) newErrors.fromCity = 'Выберите город отправления';
        if (!formData.toCity) newErrors.toCity = 'Выберите город назначения';
        if (!formData.weight || formData.weight <= 0) newErrors.weight = 'Введите корректный вес';
        if (!formData.volume || formData.volume <= 0) newErrors.volume = 'Введите корректный объем';
        if (!formData.items || formData.items <= 0) newErrors.items = 'Введите количество мест';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Расчет стоимости
    const calculateCost = () => {
        if (!validateForm()) return;

        // 1. Расчет chargeable weight
        const weight = parseFloat(formData.weight);
        const volume = parseFloat(formData.volume);
        const chargeableWeight = Math.max(weight, volume * mockData.densityThreshold);

        // 2. Определение тарифа по плотности
        const density = weight / volume;
        const tariff = mockData.railTariffs.find(t =>
            density >= t.minDensity && density <= t.maxDensity
        ) || mockData.railTariffs[0];

        // 3. Первая миля (LTL/FTL логика упрощена)
        const firstMile = calculateFirstMile(weight, volume);

        // 4. ЖД фрахт
        const railFreight = chargeableWeight * tariff.price;

        // 5. Доп услуги
        const addOns = calculateAddOns();

        // 6. Итого
        const total = firstMile + railFreight + addOns;

        setCalculation({
            chargeableWeight,
            density,
            firstMile,
            railFreight,
            addOns,
            total,
            tariff: tariff.price,
            sla: '~9 дней',
            schedule: mockData.shippingSchedule
        });
    };

    // Расчет первой мили (упрощенная логика)
    const calculateFirstMile = (weight, volume) => {
        // В реальном приложении здесь будет сложная логика из Excel
        const baseCost = 150; // CNY
        const weightCost = weight * 0.5;
        const volumeCost = volume * 60;
        return baseCost + Math.max(weightCost, volumeCost);
    };

    // Расчет дополнительных услуг
    const calculateAddOns = () => {
        let total = 0;
        if (formData.certification) total += 50;
        if (formData.palletizing) total += parseInt(formData.items) * 15;
        if (formData.lastMile) total += 200;
        return total;
    };

    // Сброс формы
    const resetForm = () => {
        setFormData({
            fromCity: '',
            toCity: '',
            weight: '',
            volume: '',
            items: '',
            lastMile: false,
            certification: false,
            palletizing: false
        });
        setCalculation(null);
        setErrors({});
    };

    return (
        <section className="wrapper-calculator">
        <div id="calculator" className="qp-calculator">
            <div className="calculator-header">
                <h2>Рассчитать стоимость</h2>
            </div>

            <div className="calculator-form">
                <div className="form-row">
                    <div className="form-group">
                        <label>Откуда *</label>
                        <select
                            value={formData.fromCity}
                            onChange={(e) => setFormData({...formData, fromCity: e.target.value})}
                            className={errors.fromCity ? 'error' : ''}
                        >
                            <option value="">Выберите город</option>
                            {mockData.cities.filter(c => c.country === 'CN').map(city => (
                                <option key={city.id} value={city.name}>{city.name}</option>
                            ))}
                        </select>
                        {errors.fromCity && <span className="error-text">{errors.fromCity}</span>}
                    </div>

                    <div className="form-group">
                        <label>Куда *</label>
                        <select
                            value={formData.toCity}
                            onChange={(e) => setFormData({...formData, toCity: e.target.value})}
                            className={errors.toCity ? 'error' : ''}
                        >
                            <option value="">Выберите город</option>
                            {mockData.cities.filter(c => c.country === 'RU').map(city => (
                                <option key={city.id} value={city.name}>{city.name}</option>
                            ))}
                        </select>
                        {errors.toCity && <span className="error-text">{errors.toCity}</span>}
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Вес, кг *</label>
                        <input
                            type="number"
                            value={formData.weight}
                            onChange={(e) => setFormData({...formData, weight: e.target.value})}
                            placeholder="Например: 400"
                            className={errors.weight ? 'error' : ''}
                        />
                        {errors.weight && <span className="error-text">{errors.weight}</span>}
                    </div>

                    <div className="form-group">
                        <label>Объем, м³ *</label>
                        <input
                            type="number"
                            step="0.1"
                            value={formData.volume}
                            onChange={(e) => setFormData({...formData, volume: e.target.value})}
                            placeholder="Например: 2.4/ Плотность влияет на расчет ЖД-фрахта"
                            className={errors.volume ? 'error' : ''}
                        />
                        {errors.volume && <span className="error-text">{errors.volume}</span>}
                        {/*<div className="hint">Плотность влияет на расчет ЖД-фрахта</div>*/}
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group">
                        <label>Количество мест *</label>
                        <input
                            type="number"
                            value={formData.items}
                            onChange={(e) => setFormData({...formData, items: e.target.value})}
                            placeholder="Например: 12"
                            className={errors.items ? 'error' : ''}
                        />
                        {errors.items && <span className="error-text">{errors.items}</span>}
                    </div>
                    <div className="form-group">
                        <h4>Дополнительные услуги</h4>
                        <div className="checkboxes">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={formData.lastMile}
                                    onChange={(e) => setFormData({...formData, lastMile: e.target.checked})}
                                />
                                <span className="checkboxLabel">Последняя миля</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={formData.certification}
                                    onChange={(e) => setFormData({...formData, certification: e.target.checked})}
                                />
                                <span className="checkboxLabel">Сертификация</span>
                            </label>

                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={formData.palletizing}
                                    onChange={(e) => setFormData({...formData, palletizing: e.target.checked})}
                                />
                                <span className="checkboxLabel">Паллетирование</span>
                            </label>
                        </div>
                    </div>
                </div>


                <div className="form-actions">
                    <button type="button" className="btn-secondary" onClick={resetForm}>
                        Сбросить
                    </button>
                    <button type="button" className="btn-primary" onClick={calculateCost}>
                        Рассчитать стоимость
                    </button>
                </div>
            </div>

            {calculation && (
                <div className="calculator-form">
                    <div className="form-row">
                        <div className="form-group">
                            <div className="total-amount">
                                <p className="price">Стоимость:</p>
                                <p className="amount">    {calculation.total.toFixed(2)} CNY</p>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="total-amount">
                                <p className="price">ETA:</p>
                                <p className="amount">    {calculation.sla}</p>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <div className="schedule-block">
                                <h4>Ближайшие отправления:</h4>
                                <div className="schedule-dates">
                                    {calculation.schedule.map((shipment, index) => (
                                            <span className="date">{new Date(shipment.date).toLocaleDateString('ru-RU')}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Получить детализацию стоимости:</label>
                            <input
                                type="email"
                                placeholder="Введите почту"
                            />
                        </div>
                    </div>
                </div>
               /* <div className="calculation-result">
                    <div className="result-header">
                        <h3>Результаты расчета</h3>
                        <div className="sla-badge">
                            <span className="eta">ETA: {calculation.sla}</span>
                        </div>
                    </div>

                    <div className="total-block">
                        <div className="total-amount">
                            <span className="label">Итого:</span>
                            <span className="amount">{calculation.total.toFixed(2)} CNY</span>
                        </div>

                        {/!*<button
                            className="btn-commercial"
                            onClick={() =>  Логика запроса КП }
                        >
                            Получить коммерческое предложение
                        </button>*!/}
                    </div>

                    <div className="schedule-block">
                        <h4>Ближайшие отправления:</h4>
                        <div className="schedule-dates">
                            {calculation.schedule.map((shipment, index) => (
                                <div key={index} className="shipment-date">
                                    <span className="date">{new Date(shipment.date).toLocaleDateString('ru-RU')}</span>
                                    <span className="cutoff">cut-off: {new Date(shipment.cutOff).toLocaleDateString('ru-RU')}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="details-section">
                        <button
                            className="details-toggle"
                            onClick={() => setShowDetails(!showDetails)}
                        >
                            {showDetails ? 'Скрыть детализацию' : 'Показать детализацию стоимости'}
                        </button>
                        {showDetails && (
                            <div className="cost-breakdown">
                                <div className="cost-item">
                                    <span>Расчетный вес:</span>
                                    <span>{calculation.chargeableWeight} кг (плотность: {calculation.density.toFixed(1)} кг/м³)</span>
                                </div>
                                <div className="cost-item">
                                    <span>Первая миля:</span>
                                    <span>{calculation.firstMile.toFixed(2)} CNY</span>
                                </div>
                                <div className="cost-item">
                                    <span>ЖД фрахт ({calculation.tariff} CNY/кг):</span>
                                    <span>{calculation.railFreight.toFixed(2)} CNY</span>
                                </div>
                                <div className="cost-item">
                                    <span>Доп. услуги:</span>
                                    <span>{calculation.addOns.toFixed(2)} CNY</span>
                                </div>
                                <div className="cost-item total">
                                    <span>Общая стоимость:</span>
                                    <span>{calculation.total.toFixed(2)} CNY</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>*/
            )}
        </div>
        </section>
    );
};



export default QPCalculator;

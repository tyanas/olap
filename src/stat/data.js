const availableDatasets = [
    {
        weight: 300,
        dataset: 'users',
        displayName: 'Сотрудники',
        fields: [
            { weight: 400, field: 'status', displayName: 'Статус', type: 'STRING', isKeyField: true },
            { weight: 100, field: 'person_name', displayName: 'ФИО', type: 'STRING', isKeyField: true },
            { weight: 320, field: 'unit2', displayName: 'Отдел 2', type: 'STRING', isKeyField: true },
            { weight: 310, field: 'unit1', displayName: 'Отдел 1', type: 'STRING', isKeyField: true },
            { weight: 330, field: 'unit3', displayName: 'Отдел 3', type: 'STRING', isKeyField: true },
            { weight: 340, field: 'unit4', displayName: 'Отдел 4', type: 'STRING', isKeyField: true },
            { weight: 200, field: 'cnt', displayName: 'Количество', type: 'INTEGER', isKeyField: false }
        ]
    },
    {
        weight: 100,
        dataset: 'sell',
        displayName: 'Продажи',
        fields: [
            { weight: 400, field: 'status0', displayName: 'Статус 0', type: 'STRING', isKeyField: true },
            { weight: 450, field: 'status5', displayName: 'Статус 5', type: 'STRING', isKeyField: true },
            { weight: 440, field: 'status4', displayName: 'Статус 4', type: 'STRING', isKeyField: true },
            { weight: 430, field: 'status3', displayName: 'Статус 3', type: 'STRING', isKeyField: true },
            { weight: 420, field: 'status2', displayName: 'Статус 2', type: 'STRING', isKeyField: true },
            { weight: 300, field: 'person_name', displayName: 'ФИО', type: 'STRING', isKeyField: true },
            { weight: 100, field: 'unit', displayName: 'Отдел', type: 'STRING', isKeyField: true },
            { weight: 200, field: 'cnt0', displayName: 'число 0', type: 'INTEGER', isKeyField: false },
            { weight: 200, field: 'cnt1', displayName: 'число 1', type: 'INTEGER', isKeyField: false },
            { weight: 230, field: 'cnt2', displayName: 'число 2', type: 'INTEGER', isKeyField: false },
            { weight: 200, field: 'cnt3', displayName: 'число 3', type: 'INTEGER', isKeyField: false },
            { weight: 240, field: 'cnt4', displayName: 'число 4', type: 'INTEGER', isKeyField: false },
            { weight: 200, field: 'cnt5', displayName: 'число 5', type: 'INTEGER', isKeyField: false },
            { weight: 250, field: 'cnt6', displayName: 'число 6', type: 'INTEGER', isKeyField: false },
            { weight: 200, field: 'cnt7', displayName: 'число 7', type: 'INTEGER', isKeyField: false },
        ]
    },
    {
        weight: 200,
        dataset: 'buy',
        displayName: 'Закупки',
        fields: [
            { weight: 300, field: 'status', displayName: 'Объем', type: 'STRING', isKeyField: true },
            { weight: 200, field: 'person_name', displayName: 'парам', type: 'STRING', isKeyField: true },
            { weight: 400, field: 'unit', displayName: 'Где', type: 'STRING', isKeyField: true },
            { weight: 100, field: 'cnt', displayName: 'Время', type: 'INTEGER', isKeyField: false }
        ]
    },
    {
        weight: 400,
        dataset: 'deliver',
        displayName: 'Логистика',
        fields: [
            { weight: 100, field: 'status', displayName: 'Регион', type: 'STRING', isKeyField: true },
            { weight: 200, field: 'person_name', displayName: 'Способ', type: 'STRING', isKeyField: true },
            { weight: 400, field: 'unit', displayName: 'Задержка', type: 'STRING', isKeyField: true },
            { weight: 300, field: 'cnt', displayName: 'Количество', type: 'INTEGER', isKeyField: false }
        ]
    }
];

export function columnsByDataset(dataset) {
    const columns = dataset.fields.sort((a, b) => {
        return a.weight - b.weight;
    });
    return columns.map(field => {
        return {
            key: field.field,
            label: field.displayName,
            numeric: field.type === 'INTEGER' || field.type === 'FLOAT'
        };
    });
}

export const datasets = availableDatasets;

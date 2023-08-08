module.exports = {
    name: 'CohortExtenstion_Akansha',
    publisher: 'Cohort',
    cards: [{
        type: 'CohortExtenstionCard',
        source: './src/cards/CohortExtenstionCard',
        title: 'CohortExtenstion Card',
        displayCardType: 'CohortExtenstion Card',
        description: 'This is an introductory card to the Ellucian Experience SDK',
        pageRoute: {
            route: '/',
            excludeClickSelectors: ['a']
        }
    }],
    page: {
        source: './src/page/router.jsx'
    }
};
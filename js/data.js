const API_BASE = 'https://dummyjson.com';
const CLIENT_STATUSES = ['Lead', 'Contacted', 'Won', 'Lost'];

let clients = [];

// Convert an API user into a CRM client.
function mapApiClient(user) {
  return {
    id: user.id,
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    phone: user.phone,
    company: user.company?.name || '',
    image: user.image,
    status: 'Lead',
    dealValue: Math.floor(Math.random() * 9500) + 500,
    notes: [],
    createdAt: new Date().toISOString(),
  };
}

// Load saved clients or fetch them on the first visit.
async function loadClients() {
  const storedClients = getClients();

  if (storedClients !== null) {
    clients = storedClients;
    return clients;
  }

  const response = await fetch(`${API_BASE}/users?limit=30`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  const data = await response.json();
  clients = data.users.map(mapApiClient);
  saveClients(clients);

  return clients;
}

// Clear local data and fetch the original clients again.
async function reloadClientsFromApi() {
  clearClients();
  clients = [];

  return loadClients();
}

function activeDeals(list) {
  return list.filter(function (client) {
    return client.status !== 'Won' && client.status !== 'Lost';
  });
}

function wonRevenue(list) {
  return list
    .filter(function (client) {
      return client.status === 'Won';
    })
    .reduce(function (total, client) {
      return total + client.dealValue;
    }, 0);
}

function newThisWeek(list) {
  return list.filter(function (client) {
    const ageInDays = (Date.now() - new Date(client.createdAt)) / 86400000;
    return ageInDays <= 7;
  });
}

function countByStatus(list) {
  const initialCounts = Object.fromEntries(
    CLIENT_STATUSES.map(function (status) {
      return [status, 0];
    }),
  );

  return list.reduce(function (totals, client) {
    totals[client.status] = (totals[client.status] || 0) + 1;
    return totals;
  }, initialCounts);
}

function recentClients(list, limit = 5) {
  return [...list]
    .sort(function (firstClient, secondClient) {
      return new Date(secondClient.createdAt) - new Date(firstClient.createdAt);
    })
    .slice(0, limit);
}

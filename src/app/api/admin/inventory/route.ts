import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // Relative path to the Camisolas inventory
    // Adjusting for the fact that we are in sportsKit/src/app/api/admin/inventory
    // The target is c:\Users\pakin\OneDrive\Ambiente de Trabalho\Camisolas\data\inventory.json
    
    const inventoryPath = 'C:\\Users\\pakin\\OneDrive\\Ambiente de Trabalho\\Camisolas\\data\\inventory.json';
    
    if (!fs.existsSync(inventoryPath)) {
      return NextResponse.json({ error: 'Inventory file not found' }, { status: 404 });
    }

    const rawData = fs.readFileSync(inventoryPath, 'utf8');
    const products = JSON.parse(rawData);

    // Taxonomy Mapping
    const leagueToCountry: Record<string, string> = {
      'Liga Espanhola': 'Spain',
      'Liga Portuguesa': 'Portugal',
      'Premier League': 'England',
      'Serie A italiana': 'Italy',
      'Bundesliga': 'Germany',
      'Liga Francesa': 'France',
      'Seleções nacionais': 'International',
      'Espanha': 'Spain',
      'Espanha ': 'Spain',
      'Portugal': 'Portugal',
      'Argentina': 'Argentina',
      'Brasil': 'Brazil',
      'Cabo Verde': 'Cape Verde',
      'Colombia': 'Colombia',
      'Holanda': 'Netherlands',
      'Italia': 'Italy',
      'Nigeria': 'Nigeria',
      'Noruega': 'Norway',
      'Benfica': 'Portugal',
      'Porto': 'Portugal',
      'Barcelona': 'Spain',
      'Bayern Munchen': 'Germany',
      'Chelsea': 'England',
      'Manchester United': 'England',
      'Milan': 'Italy',
      'Paris SG': 'France',
    };

    const transformedProducts = products.map((p: any) => {
      const category = p.category || (p.categories && p.categories[0]) || 'Other';
      const country = leagueToCountry[category] || 'Other';
      
      return {
        id: p.id,
        name: p.title,
        image: p.coverImage,
        url: p.url,
        category: category,
        country: country,
        type: category === 'Seleções nacionais' ? 'National Team' : 'Club',
        source: 'Camisolas'
      };
    });

    return NextResponse.json({ 
      count: transformedProducts.length,
      products: transformedProducts 
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

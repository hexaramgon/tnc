/**
 * This is a helper file for RAW API return fields
 * it basically stores types and fields returned / wanted by the RAW API
 * Note: All Data Fetched From a single test GET from the following URL:
 * https://coolclimate.berkeley.edu/calculators/household/api.php?op=get_defaults_and_results&input_location_mode=2&input_location=1761&input_location_country=US&input_income=4&input_size=2
 * @author Yunhao Cao (https://github.com/ToiletCommander)
 */
var RawAPIInputLocationModeType;
(function (RawAPIInputLocationModeType) {
    RawAPIInputLocationModeType[RawAPIInputLocationModeType["ZipCode"] = 1] = "ZipCode";
    RawAPIInputLocationModeType[RawAPIInputLocationModeType["City"] = 2] = "City";
    RawAPIInputLocationModeType[RawAPIInputLocationModeType["County"] = 3] = "County";
    RawAPIInputLocationModeType[RawAPIInputLocationModeType["State"] = 4] = "State";
    RawAPIInputLocationModeType[RawAPIInputLocationModeType["Country"] = 5] = "Country";
})(RawAPIInputLocationModeType || (RawAPIInputLocationModeType = {}));
;
export { RawAPIInputLocationModeType };
var RawAPIHouseHoldSizeType;
(function (RawAPIHouseHoldSizeType) {
    RawAPIHouseHoldSizeType[RawAPIHouseHoldSizeType["Average"] = 0] = "Average";
    RawAPIHouseHoldSizeType[RawAPIHouseHoldSizeType["One"] = 1] = "One";
    RawAPIHouseHoldSizeType[RawAPIHouseHoldSizeType["Two"] = 2] = "Two";
    RawAPIHouseHoldSizeType[RawAPIHouseHoldSizeType["Three"] = 3] = "Three";
    RawAPIHouseHoldSizeType[RawAPIHouseHoldSizeType["Four"] = 4] = "Four";
    RawAPIHouseHoldSizeType[RawAPIHouseHoldSizeType["FiveAndMore"] = 5] = "FiveAndMore";
})(RawAPIHouseHoldSizeType || (RawAPIHouseHoldSizeType = {}));
;
export { RawAPIHouseHoldSizeType };
var RawAPIHouseHoldIncomeType;
(function (RawAPIHouseHoldIncomeType) {
    RawAPIHouseHoldIncomeType[RawAPIHouseHoldIncomeType["Average"] = 1] = "Average";
    RawAPIHouseHoldIncomeType[RawAPIHouseHoldIncomeType["LessThanTenThousand"] = 2] = "LessThanTenThousand";
    RawAPIHouseHoldIncomeType[RawAPIHouseHoldIncomeType["Ten_Thosuand_To_Twenty_Thousand"] = 3] = "Ten_Thosuand_To_Twenty_Thousand";
    RawAPIHouseHoldIncomeType[RawAPIHouseHoldIncomeType["Twenty_Thousand_To_Thirty_Thousand"] = 4] = "Twenty_Thousand_To_Thirty_Thousand";
    RawAPIHouseHoldIncomeType[RawAPIHouseHoldIncomeType["Thirty_Thosuand_To_Forty_Thousand"] = 5] = "Thirty_Thosuand_To_Forty_Thousand";
    RawAPIHouseHoldIncomeType[RawAPIHouseHoldIncomeType["Forty_Thousand_To_Fifty_Thousand"] = 6] = "Forty_Thousand_To_Fifty_Thousand";
    RawAPIHouseHoldIncomeType[RawAPIHouseHoldIncomeType["Fifty_Thosuand_To_Sixty_Thousand"] = 7] = "Fifty_Thosuand_To_Sixty_Thousand";
    RawAPIHouseHoldIncomeType[RawAPIHouseHoldIncomeType["Sixty_Thosuand_To_Eighty_Thosand"] = 8] = "Sixty_Thosuand_To_Eighty_Thosand";
    RawAPIHouseHoldIncomeType[RawAPIHouseHoldIncomeType["Eighty_Thosuand_To_A_Hundred_Thousand"] = 9] = "Eighty_Thosuand_To_A_Hundred_Thousand";
    RawAPIHouseHoldIncomeType[RawAPIHouseHoldIncomeType["A_Hundred_Thosand_To_One_Twenty_Thousand"] = 10] = "A_Hundred_Thosand_To_One_Twenty_Thousand";
    RawAPIHouseHoldIncomeType[RawAPIHouseHoldIncomeType["One_Twenty_Thousand_Or_More"] = 11] = "One_Twenty_Thousand_Or_More";
})(RawAPIHouseHoldIncomeType || (RawAPIHouseHoldIncomeType = {}));
;
export { RawAPIHouseHoldIncomeType };
;
var rawDefaultInputParamNames = ['input_location', 'input_location_mode', 'input_income', 'input_size'];
export { rawDefaultInputParamNames };
var rawInputParamNames = [
    'input_location',
    'input_location_mode',
    'input_location_country',
    'input_size',
    'input_income',
    'input_population',
    'input_changed',
    'input_footprint_household_adults',
    'input_footprint_household_children',
    'input_footprint_transportation_num_vehicles',
    'input_footprint_transportation_miles1',
    'input_footprint_transportation_mpg1',
    'input_footprint_transportation_fuel1',
    'input_footprint_transportation_miles2',
    'input_footprint_transportation_mpg2',
    'input_footprint_transportation_fuel2',
    'input_footprint_transportation_miles3',
    'input_footprint_transportation_mpg3',
    'input_footprint_transportation_fuel3',
    'input_footprint_transportation_miles4',
    'input_footprint_transportation_mpg4',
    'input_footprint_transportation_fuel4',
    'input_footprint_transportation_miles5',
    'input_footprint_transportation_mpg5',
    'input_footprint_transportation_fuel5',
    'input_footprint_transportation_miles6',
    'input_footprint_transportation_mpg6',
    'input_footprint_transportation_fuel6',
    'input_footprint_transportation_miles7',
    'input_footprint_transportation_mpg7',
    'input_footprint_transportation_fuel7',
    'input_footprint_transportation_miles8',
    'input_footprint_transportation_mpg8',
    'input_footprint_transportation_fuel8',
    'input_footprint_transportation_miles9',
    'input_footprint_transportation_mpg9',
    'input_footprint_transportation_fuel9',
    'input_footprint_transportation_miles10',
    'input_footprint_transportation_mpg10',
    'input_footprint_transportation_fuel10',
    'input_footprint_transportation_groundtype',
    'input_footprint_transportation_publictrans',
    'input_footprint_transportation_bus',
    'input_footprint_transportation_transit',
    'input_footprint_transportation_commuter',
    'input_footprint_transportation_intercity',
    'input_footprint_transportation_airtype',
    'input_footprint_transportation_airtotal',
    'input_footprint_transportation_airshort',
    'input_footprint_transportation_airmedium',
    'input_footprint_transportation_airlong',
    'input_footprint_transportation_airextended',
    'input_footprint_housing_cdd',
    'input_footprint_housing_hdd',
    'input_footprint_housing_electricity_type',
    'input_footprint_housing_electricity_dollars',
    'input_footprint_housing_electricity_kwh',
    'input_footprint_housing_cleanpercent',
    'input_footprint_housing_naturalgas_type',
    'input_footprint_housing_naturalgas_dollars',
    'input_footprint_housing_naturalgas_therms',
    'input_footprint_housing_naturalgas_cuft',
    'input_footprint_housing_heatingoil_type',
    'input_footprint_housing_heatingoil_dollars',
    'input_footprint_housing_heatingoil_gallons',
    'input_footprint_housing_heatingoil_dollars_per_gallon',
    'input_footprint_housing_squarefeet',
    'input_footprint_housing_watersewage',
    'input_footprint_housing_gco2_per_kwh',
    'input_footprint_shopping_food_meatfisheggs_default',
    'input_footprint_shopping_food_meat_beefpork_default',
    'input_footprint_shopping_food_meat_poultry_default',
    'input_footprint_shopping_food_meat_fish_default',
    'input_footprint_shopping_food_meat_other_default',
    'input_footprint_shopping_food_dairy_default',
    'input_footprint_shopping_food_fruitvegetables_default',
    'input_footprint_shopping_food_cereals_default',
    'input_footprint_shopping_food_otherfood_default',
    'input_footprint_shopping_food_meattype',
    'input_footprint_shopping_food_meatfisheggs',
    'input_footprint_shopping_food_meat_beefpork',
    'input_footprint_shopping_food_meat_poultry',
    'input_footprint_shopping_food_meat_fish',
    'input_footprint_shopping_food_meat_other',
    'input_footprint_shopping_food_dairy',
    'input_footprint_shopping_food_fruitvegetables',
    'input_footprint_shopping_food_cereals',
    'input_footprint_shopping_food_otherfood',
    'input_footprint_shopping_goods_default_furnitureappliances',
    'input_footprint_shopping_goods_default_clothing',
    'input_footprint_shopping_goods_default_other_entertainment',
    'input_footprint_shopping_goods_default_other_office',
    'input_footprint_shopping_goods_default_other_personalcare',
    'input_footprint_shopping_goods_default_other_autoparts',
    'input_footprint_shopping_goods_default_other_medical',
    'input_footprint_shopping_goods_type',
    'input_footprint_shopping_goods_total',
    'input_footprint_shopping_goods_furnitureappliances',
    'input_footprint_shopping_goods_clothing',
    'input_footprint_shopping_goods_other_type',
    'input_footprint_shopping_goods_other_total',
    'input_footprint_shopping_goods_other_entertainment',
    'input_footprint_shopping_goods_other_office',
    'input_footprint_shopping_goods_other_personalcare',
    'input_footprint_shopping_goods_other_autoparts',
    'input_footprint_shopping_goods_other_medical',
    'input_footprint_shopping_services_type',
    'input_footprint_shopping_services_total',
    'input_footprint_shopping_services_healthcare',
    'input_footprint_shopping_services_education',
    'input_footprint_shopping_services_communications',
    'input_footprint_shopping_services_vehicleservices',
    'input_footprint_shopping_services_finance',
    'input_footprint_shopping_services_household',
    'input_footprint_shopping_services_charity',
    'input_footprint_shopping_services_miscservices',
    'input_takeaction_more_efficient_vehicle',
    'input_takeaction_more_efficient_vehicle_miles_old',
    'input_takeaction_more_efficient_vehicle_mpg_old',
    'input_takeaction_more_efficient_vehicle_miles_new',
    'input_takeaction_more_efficient_vehicle_mpg_new',
    'input_takeaction_more_efficient_vehicle_sell',
    'input_takeaction_more_efficient_vehicle_purchase',
    'input_takeaction_alternativefuel_vehicle',
    'input_takeaction_alternativefuel_vehicle_miles_old',
    'input_takeaction_alternativefuel_vehicle_mpg_old',
    'input_takeaction_alternativefuel_vehicle_miles_new',
    'input_takeaction_alternativefuel_vehicle_mpg_new',
    'input_takeaction_alternativefuel_vehicle_sell',
    'input_takeaction_alternativefuel_vehicle_purchase',
    'input_takeaction_alternativefuel_vehicle_rebates',
    'input_takeaction_alternativefuel_vehicle_new_fuel_cost',
    'input_takeaction_electric_vehicle',
    'input_takeaction_electric_vehicle_miles_old',
    'input_takeaction_electric_vehicle_miles_new',
    'input_takeaction_electric_vehicle_mpg_old',
    'input_takeaction_electric_vehicle_mpg_new',
    'input_takeaction_electric_vehicle_sell',
    'input_takeaction_electric_vehicle_purchase',
    'input_takeaction_electric_vehicle_rebates',
    'input_takeaction_hybrid_vehicle',
    'input_takeaction_hybrid_vehicle_miles_old',
    'input_takeaction_hybrid_vehicle_mpg_old',
    'input_takeaction_hybrid_vehicle_miles_new',
    'input_takeaction_hybrid_vehicle_mpg_new',
    'input_takeaction_hybrid_vehicle_sell',
    'input_takeaction_hybrid_vehicle_purchase',
    'input_takeaction_hybrid_vehicle_rebates',
    'input_takeaction_telecommute_to_work',
    'input_takeaction_telecommute_to_work_miles',
    'input_takeaction_telecommute_to_work_days',
    'input_takeaction_telecommute_to_work_mpg',
    'input_takeaction_telecommute_to_work_times',
    'input_takeaction_telecommute_to_work_worth',
    'input_takeaction_telecommute_to_work_parking',
    'input_takeaction_ride_my_bike',
    'input_takeaction_ride_my_bike_mpg',
    'input_takeaction_ride_my_bike_miles',
    'input_takeaction_ride_my_bike_include_foodemissions',
    'input_takeaction_take_public_transportation',
    'input_takeaction_take_public_transportation_type',
    'input_takeaction_take_public_transportation_miles',
    'input_takeaction_take_public_transportation_mpg',
    'input_takeaction_take_public_transportation_parking',
    'input_takeaction_take_public_transportation_ptfare',
    'input_takeaction_take_public_transportation_gco2bus',
    'input_takeaction_take_public_transportation_gco2ngbus',
    'input_takeaction_take_public_transportation_gco2transit',
    'input_takeaction_take_public_transportation_gco2amtrak',
    'input_takeaction_practice_eco_driving',
    'input_takeaction_practice_eco_driving_hwpercent',
    'input_takeaction_practice_eco_driving_topspeed',
    'input_takeaction_practice_eco_driving_lowerspeed',
    'input_takeaction_practice_eco_driving_topspercent',
    'input_takeaction_maintain_my_vehicles',
    'input_takeaction_maintain_my_vehicles_tires',
    'input_takeaction_maintain_my_vehicles_airfilter',
    'input_takeaction_maintain_my_vehicles_tirespercent',
    'input_takeaction_maintain_my_vehicles_filterpercent',
    'input_takeaction_maintain_my_vehicles_tirescost',
    'input_takeaction_maintain_my_vehicles_filtercost',
    'input_takeaction_carpool_to_work',
    'input_takeaction_carpool_to_work_dist',
    'input_takeaction_carpool_to_work_days',
    'input_takeaction_carpool_to_work_passenger',
    'input_takeaction_carpool_to_work_mpgvehc',
    'input_takeaction_carpool_to_work_fees',
    'input_takeaction_carpool_to_work_daysper',
    'input_takeaction_carpool_to_work_depvehu',
    'input_takeaction_carpool_to_work_category',
    'input_takeaction_carpool_to_work_mpgvehu',
    'input_takeaction_reduce_air_travel',
    'input_takeaction_reduce_air_travel_miles_percent',
    'input_takeaction_offset_transportation',
    'input_takeaction_offset_transportation_offset',
    'input_takeaction_switch_to_cfl',
    'input_takeaction_switch_to_cfl_cfl',
    'input_takeaction_switch_to_cfl_hours',
    'input_takeaction_switch_to_cfl_incanwatt',
    'input_takeaction_switch_to_cfl_cflwatt',
    'input_takeaction_switch_to_cfl_cflcost',
    'input_takeaction_switch_to_cfl_incancost',
    'input_takeaction_switch_to_cfl_incanlife',
    'input_takeaction_switch_to_cfl_cfllife',
    'input_takeaction_turn_off_lights',
    'input_takeaction_turn_off_lights_number',
    'input_takeaction_turn_off_lights_watts',
    'input_takeaction_turn_off_lights_hours',
    'input_takeaction_T12toT8',
    'input_takeaction_T12toT8_T8',
    'input_takeaction_T12toT8_hours',
    'input_takeaction_T12toT8_T12watt',
    'input_takeaction_T12toT8_T8watt',
    'input_takeaction_T12toT8_T8cost',
    'input_takeaction_tankless_water_heater',
    'input_takeaction_tankless_water_heater_temp',
    'input_takeaction_tankless_water_heater_fueltype',
    'input_takeaction_tankless_water_heater_replacements',
    'input_takeaction_tankless_water_heater_replacement_cost',
    'input_takeaction_thermostat_winter',
    'input_takeaction_thermostat_winter_fueltype',
    'input_takeaction_thermostat_winter_percentuse',
    'input_takeaction_thermostat_winter_hdd',
    'input_takeaction_thermostat_winter_daydegrees',
    'input_takeaction_thermostat_winter_nightdegrees',
    'input_takeaction_thermostat_winter_wdsetup',
    'input_takeaction_thermostat_winter_fueloilprice',
    'input_takeaction_thermostat_winter_wdntsetup',
    'input_takeaction_thermostat_winter_wesetup',
    'input_takeaction_thermostat_winter_wentsetup',
    'input_takeaction_thermostat_summer',
    'input_takeaction_thermostat_summer_daydegrees',
    'input_takeaction_thermostat_summer_nightdegrees',
    'input_takeaction_thermostat_summer_cdd',
    'input_takeaction_thermostat_summer_percentuse',
    'input_takeaction_thermostat_summer_wdsetup',
    'input_takeaction_thermostat_summer_wdntsetup',
    'input_takeaction_thermostat_summer_wesetup',
    'input_takeaction_thermostat_summer_wentsetup',
    'input_takeaction_purchase_high_efficiency_cooling',
    'input_takeaction_purchase_high_efficiency_cooling_cdd',
    'input_takeaction_purchase_high_efficiency_cooling_percentuse',
    'input_takeaction_purchase_high_efficiency_cooling_conventional_rating',
    'input_takeaction_purchase_high_efficiency_cooling_energystar_rating',
    'input_takeaction_purchase_high_efficiency_cooling_cost_difference',
    'input_takeaction_purchase_high_efficiency_heating',
    'input_takeaction_purchase_high_efficiency_heating_fueltype',
    'input_takeaction_purchase_high_efficiency_heating_percentuse',
    'input_takeaction_purchase_high_efficiency_heating_hdd',
    'input_takeaction_purchase_high_efficiency_heating_fueloilprice',
    'input_takeaction_purchase_high_efficiency_heating_conventional_eff',
    'input_takeaction_purchase_high_efficiency_heating_energystar_eff',
    'input_takeaction_purchase_high_efficiency_heating_cost_difference',
    'input_takeaction_energy_star_fridge',
    'input_takeaction_energy_star_fridge_fridgetype',
    'input_takeaction_energy_star_fridge_fridgecost',
    'input_takeaction_energy_star_fridge_fresh',
    'input_takeaction_energy_star_fridge_freezer',
    'input_takeaction_energy_star_printers',
    'input_takeaction_energy_star_printers_amount',
    'input_takeaction_energy_star_printers_annual_savings',
    'input_takeaction_energy_star_printers_cost',
    'input_takeaction_energy_star_copiers',
    'input_takeaction_energy_star_copiers_amount',
    'input_takeaction_energy_star_copiers_annual_savings',
    'input_takeaction_energy_star_copiers_cost',
    'input_takeaction_energy_star_desktops',
    'input_takeaction_energy_star_desktops_amount',
    'input_takeaction_energy_star_desktops_annual_savings',
    'input_takeaction_energy_star_desktops_cost',
    'input_takeaction_rechargeable_batteries',
    'input_takeaction_rechargeable_batteries_amount_aaa',
    'input_takeaction_rechargeable_batteries_amount_aa',
    'input_takeaction_rechargeable_batteries_amount_c',
    'input_takeaction_rechargeable_batteries_amount_d',
    'input_takeaction_rechargeable_batteries_amount_9v',
    'input_takeaction_rechargeable_batteries_weight_aaa',
    'input_takeaction_rechargeable_batteries_weight_aa',
    'input_takeaction_rechargeable_batteries_weight_c',
    'input_takeaction_rechargeable_batteries_weight_d',
    'input_takeaction_rechargeable_batteries_weight_9v',
    'input_takeaction_rechargeable_batteries_cost_aaa',
    'input_takeaction_rechargeable_batteries_cost_aa',
    'input_takeaction_rechargeable_batteries_cost_c',
    'input_takeaction_rechargeable_batteries_cost_d',
    'input_takeaction_rechargeable_batteries_cost_9v',
    'input_takeaction_rechargeable_batteries_uses',
    'input_takeaction_rechargeable_batteries_cost_multiple',
    'input_takeaction_rechargeable_batteries_charge_energy',
    'input_takeaction_rechargeable_batteries_carbon_emissions',
    'input_takeaction_power_mgmt_comp',
    'input_takeaction_power_mgmt_comp_desktops',
    'input_takeaction_power_mgmt_comp_monitors',
    'input_takeaction_power_mgmt_comp_percent_d',
    'input_takeaction_power_mgmt_comp_percent_m',
    'input_takeaction_purchase_green_electricity',
    'input_takeaction_purchase_green_electricity_percentclean',
    'input_takeaction_purchase_green_electricity_costclean',
    'input_takeaction_purchase_green_electricity_kwhcost',
    'input_takeaction_install_PV_panels',
    'input_takeaction_install_PV_panels_percent',
    'input_takeaction_install_PV_panels_w_cost',
    'input_takeaction_install_solar_heating',
    'input_takeaction_install_solar_heating_percent',
    'input_takeaction_install_solar_heating_cost',
    'input_takeaction_install_solar_heating_ng_consumption',
    'input_takeaction_low_flow_showerheads',
    'input_takeaction_low_flow_showerheads_amount',
    'input_takeaction_low_flow_showerheads_amount_replaced',
    'input_takeaction_low_flow_showerheads_avg_showers',
    'input_takeaction_low_flow_showerheads_cost',
    'input_takeaction_low_flow_showerheads_old_flow',
    'input_takeaction_low_flow_showerheads_new_flow',
    'input_takeaction_low_flow_showerheads_nat_gas_gallon',
    'input_takeaction_low_flow_showerheads_length',
    'input_takeaction_low_flow_faucets',
    'input_takeaction_low_flow_faucets_amount',
    'input_takeaction_low_flow_faucets_replaced',
    'input_takeaction_low_flow_faucets_cost',
    'input_takeaction_low_flow_faucets_avg_daily_use',
    'input_takeaction_low_flow_faucets_minutes',
    'input_takeaction_low_flow_faucets_conventional',
    'input_takeaction_low_flow_faucets_efficient',
    'input_takeaction_low_flow_toilet',
    'input_takeaction_low_flow_toilet_old',
    'input_takeaction_low_flow_toilet_new',
    'input_takeaction_low_flow_toilet_cost',
    'input_takeaction_low_flow_toilet_amount',
    'input_takeaction_line_dry_clothing',
    'input_takeaction_line_dry_clothing_percentdry',
    'input_takeaction_line_dry_clothing_dryerldwk',
    'input_takeaction_water_efficient_landscaping',
    'input_takeaction_water_efficient_landscaping_grass_old',
    'input_takeaction_water_efficient_landscaping_plants_old',
    'input_takeaction_water_efficient_landscaping_drought_old',
    'input_takeaction_water_efficient_landscaping_grass_new',
    'input_takeaction_water_efficient_landscaping_plants_new',
    'input_takeaction_water_efficient_landscaping_drought_new',
    'input_takeaction_water_efficient_landscaping_grass_drip_old',
    'input_takeaction_water_efficient_landscaping_plant_drip_old',
    'input_takeaction_water_efficient_landscaping_grass_drip_new',
    'input_takeaction_water_efficient_landscaping_plant_drip_new',
    'input_takeaction_water_efficient_landscaping_cost_drip',
    'input_takeaction_water_efficient_landscaping_cost_drought',
    'input_takeaction_water_efficient_landscaping_sqft',
    'input_takeaction_plant_trees',
    'input_takeaction_plant_trees_amount',
    'input_takeaction_plant_trees_cost',
    'input_takeaction_plant_trees_offset',
    'input_takeaction_reduce_comm_waste',
    'input_takeaction_reduce_comm_waste_per_week',
    'input_takeaction_reduce_comm_waste_percent',
    'input_takeaction_print_double_sided',
    'input_takeaction_print_double_sided_number',
    'input_takeaction_offset_housing',
    'input_takeaction_offset_housing_offset',
    'input_takeaction_low_carbon_diet',
    'input_takeaction_low_carbon_diet_meatfootprint',
    'input_takeaction_low_carbon_diet_dairyfootprint',
    'input_takeaction_low_carbon_diet_fvfootprint',
    'input_takeaction_low_carbon_diet_cerealsfootprint',
    'input_takeaction_low_carbon_diet_otherfootprint',
    'input_takeaction_go_organic',
    'input_takeaction_go_organic_myproduce',
    'input_takeaction_go_organic_mymeat',
    'input_takeaction_go_organic_mydairy',
    'input_takeaction_go_organic_eatorgproduce',
    'input_takeaction_go_organic_eatorgmeat',
    'input_takeaction_go_organic_eatorgdairy',
    'input_takeaction_go_organic_pledgeorgprod',
    'input_takeaction_go_organic_pledgeorgmeat',
    'input_takeaction_go_organic_pledgedairy',
    'input_takeaction_go_organic_myprodcost',
    'input_takeaction_go_organic_mymeatcost',
    'input_takeaction_go_organic_mydairycost',
    'input_takeaction_offset_shopping',
    'input_takeaction_offset_shopping_offset',
    'input_takeaction_assumption_price_of_gasoline',
    'input_takeaction_assumption_kwhprice',
    'input_takeaction_assumption_ngprice',
    'input_takeaction_assumption_discountrate',
    'input_takeaction_assumption_inflationrate'
];
export { rawInputParamNames };
var rawResponseParamNames = [
    'result_motor_vehicles_direct',
    'result_motor_vehicles_indirect',
    'result_vehicle_manufact',
    'result_air_travel_direct',
    'result_air_travel_indirect',
    'result_electricity_direct',
    'result_electricity_indirect',
    'result_publictrans_direct',
    'result_publictrans_indirect',
    'result_natgas_direct',
    'result_natgas_indirect',
    'result_heatingoil_direct',
    'result_heatingoil_indirect',
    'result_watersewage',
    'result_shelter',
    'result_food_meat',
    'result_food_dairy',
    'result_food_other',
    'result_food_fruitsveg',
    'result_food_cereals',
    'result_goods_clothing',
    'result_goods_furniture',
    'result_goods_other',
    'result_services_all',
    'result_transport_total',
    'result_housing_total',
    'result_food_total',
    'result_goods_total',
    'result_services_total',
    'result_grand_total',
    'result_takeaction_pounds',
    'result_takeaction_dollars',
    'result_takeaction_net10yr',
    'result_takeaction_transport_total',
    'result_takeaction_housing_total',
    'result_takeaction_shopping_food_total',
    'result_takeaction_shopping_goods_total',
    'result_takeaction_shopping_services_total',
    'result_takeaction_grand_total',
    'result_utility_providers',
    'result_takeaction_carfuel_reduction',
    'result_takeaction_carmfg_reduction',
    'result_takeaction_pubtrans_reduction',
    'result_takeaction_airtravel_reduction',
    'result_takeaction_electricity_reduction',
    'result_takeaction_natgas_reduction',
    'result_takeaction_otherfuels_reduction',
    'result_takeaction_watersewage_reduction',
    'result_takeaction_construction_reduction',
    'result_takeaction_meat_reduction',
    'result_takeaction_dairy_reduction',
    'result_takeaction_fruitsveg_reduction',
    'result_takeaction_cereals_reduction',
    'result_takeaction_foodother_reduction',
    'result_takeaction_clothing_reduction',
    'result_takeaction_furniture_reduction',
    'result_takeaction_goodsother_reduction',
    'result_takeaction_servicesall_reduction',
    'result_takeaction_upfront',
    'result_takeaction_ride_my_bike_totalcalories',
    'result_takeaction_ride_my_bike_ghgper100cal',
    'result_takeaction_ride_my_bike_bikeghgs',
    'result_takeaction_ride_my_bike_driveghgs',
    'result_takeaction_practice_eco_driving_dispmiles',
    'result_takeaction_practice_eco_driving_newmpg',
    'result_takeaction_practice_eco_driving_galsaved',
    'result_takeaction_practice_eco_driving_mpg',
    'result_takeaction_carpool_to_work_dep1k',
    'result_takeaction_carpool_to_work_mpgvehu',
    'result_takeaction_reduce_air_travel_pounds_from_flight',
    'result_takeaction_offset_transportation_transtonsleft',
    'result_takeaction_offset_transportation_transpledges',
    'result_takeaction_energy_star_fridge_totvolume',
    'result_takeaction_energy_star_fridge_fridgekwh',
    'result_takeaction_energy_star_fridge_ESfridgekwh',
    'result_takeaction_maintain_my_vehicles_mpg',
    'result_takeaction_maintain_my_vehicles_dispmiles',
    'result_takeaction_reduce_air_travel_totalmiles',
    'result_takeaction_reduce_air_travel_miles_alt',
    'result_takeaction_thermostat_winter_dollarstypical',
    'result_takeaction_thermostat_winter_dollarsuse',
    'result_takeaction_thermostat_winter_intensity',
    'result_takeaction_thermostat_winter_gCO2fueltype',
    'result_takeaction_thermostat_winter_pu',
    'result_takeaction_thermostat_summer_dollarstypical',
    'result_takeaction_thermostat_summer_kwhtypical',
    'result_takeaction_thermostat_summer_dollarsuse',
    'result_takeaction_thermostat_summer_kwhuse',
    'result_takeaction_purchase_high_efficiency_cooling_dollarstypical',
    'result_takeaction_purchase_high_efficiency_cooling_kwhtypical',
    'result_takeaction_purchase_high_efficiency_cooling_dollarsuse',
    'result_takeaction_purchase_high_efficiency_cooling_kwhuse',
    'result_takeaction_purchase_high_efficiency_heating_dollarstypical',
    'result_takeaction_purchase_high_efficiency_heating_dollarsuse',
    'result_takeaction_purchase_high_efficiency_heating_intensity',
    'result_takeaction_purchase_high_efficiency_heating_gCO2fueltype',
    'result_takeaction_purchase_high_efficiency_heating_pu',
    'result_takeaction_purchase_green_electricity_kwhCO2yr',
    'result_takeaction_line_dry_clothing_dryerkwhyr',
    'result_takeaction_line_dry_clothing_dryercostyr',
    'result_takeaction_offset_housing_transtonsleft',
    'result_takeaction_offset_housing_transpledges',
    'result_takeaction_low_carbon_diet_meatcal',
    'result_takeaction_low_carbon_diet_dairycal',
    'result_takeaction_low_carbon_diet_fvcal',
    'result_takeaction_low_carbon_diet_cerealscal',
    'result_takeaction_low_carbon_diet_othercal',
    'result_takeaction_low_carbon_diet_totalcal',
    'result_takeaction_offset_shopping_transtonsleft',
    'result_takeaction_offset_shopping_transpledges'
];
export { rawResponseParamNames };
//# sourceMappingURL=APIRawTypes.js.map
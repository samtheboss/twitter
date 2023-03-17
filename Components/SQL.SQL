SELECT item_code, description,
  SUM(CASE WHEN trn_type IN ('IRT', 'SRT') THEN -1*(quantity*S.CONVERSION+(S.USER_VALUE2*S.USER_RATE)) ELSE quantity +(S.USER_VALUE2*S.USER_RATE)END) AS qty,
  COUNT(DISTINCT CASE WHEN trn_type NOT IN ('IRT', 'SRT') THEN order_number END) AS order_count,
  SUM(CASE WHEN trn_type IN ('IRT', 'SRT') THEN -1*amount_value ELSE amount_value END) AS amount_value,
  COUNT(DISTINCT CASE WHEN trn_type IN ('CUS', 'ISO', 'ISS') THEN order_number END)
   - COUNT(DISTINCT CASE WHEN trn_type IN ('IRT', 'SRT') THEN quantity END) AS count_value,
   c.full_name,c.address,c.telephones
FROM stock_ledger_combined s inner join CONFIGURATIONS c on c.CONFIGURATION =s.CONFIGURATION 
WHERE trn_type IN ('CUS', 'ISO', 'ISS', 'IRT', 'SRT') 
GROUP BY item_code, description  , c.full_name,c.address,c.telephones ;


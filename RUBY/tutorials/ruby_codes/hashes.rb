#!/usr/bin/ruby
first_hash = {
    'GOAT' => 'messi',
    'TEAM' => 'chelsea',
    'PLAYERS' => ['kai', 'pulisic', 'ziyech'],
    'TEAM_POSITION' => 5,
    'empty_hash' => {}
}
first_hash['GOALS'] = 13
first_hash.delete('TEAM_POSITION')
puts first_hash["GOAT"]
class Schedule < ApplicationRecord
    validates :title, presence: true, length: { maximum: 20 }
    validates :start_date, presence: true
    validates :end_date, presence: true
    validates :schedule_memo, length: { maximum: 500 }
end
# , date: { after_or_equal_to: :start_date }  
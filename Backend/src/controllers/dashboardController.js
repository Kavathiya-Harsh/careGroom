const ErrorResponse = require('../utils/errorResponse');

// @desc    Get artisan dashboard overview
// @route   GET /api/dashboard/overview
// @access  Private (Professional)
exports.getOverview = async (req, res, next) => {
  try {
    // In a real app, this data would be calculated from the database
    // (e.g., aggregating Bookings, Payments, Users, etc.)
    const dashboardData = {
      revenue: {
        total: 4250,
        trend: 12.5,
        lastMonth: 3777
      },
      retention: {
        rate: 84,
        new: 12,
        returning: 63
      },
      insight: {
        title: "Smart Insight",
        message: '"Deep Tissue" bookings are up 30% on Fridays. Consider adding a "Friday Wind Down" package to maximize revenue.'
      },
      schedule: [
        {
          id: 1,
          time: '09:00 AM - 10:30 AM',
          status: 'Confirmed',
          service: 'Signature Wellness Bath',
          client: {
            name: 'Eleanor V.',
            visits: 3,
            avatar: '/avatars/client_eleanor.png'
          }
        },
        {
          id: 2,
          time: '11:00 AM - 12:00 PM',
          status: 'Upcoming',
          service: 'Aromatherapy Grooming',
          client: {
            name: 'Marcus T.',
            avatar: null
          }
        },
        {
          id: 3,
          time: '02:00 PM - 04:00 PM',
          status: 'Upcoming',
          service: 'Full Spa Day Package',
          client: {
            name: 'Sophia R.',
            avatar: null
          }
        }
      ],
      requests: [
        {
          id: 1,
          client: {
            name: 'Isabella C.',
            isNew: true,
            avatar: '/avatars/client_isabella.png'
          },
          time: 'Tomorrow, 10:00 AM',
          service: 'Deep Tissue'
        },
        {
          id: 2,
          client: {
            name: 'James W.',
            isNew: false,
            avatar: '/avatars/client_james.png'
          },
          time: 'Nov 28, 3:00 PM',
          service: 'Quick Trim'
        }
      ]
    };

    res.status(200).json({
      success: true,
      data: dashboardData
    });
  } catch (err) {
    next(err);
  }
};

## PayPal Checkout

[![build status][build-badge]][build]
[![code coverage][coverage-badge]][coverage]
[![npm version][version-badge]][package]
[![apache license][license-badge]][license]

[build-badge]: https://img.shields.io/github/workflow/status/paypal/paypal-checkout-components/build?logo=github&style=flat-square
[build]: https://github.com/paypal/paypal-checkout-components/actions?query=workflow%3Abuild
[coverage-badge]: https://img.shields.io/codecov/c/github/paypal/paypal-checkout-components.svg?style=flat-square
[coverage]: https://codecov.io/github/paypal/paypal-checkout-components/
[version-badge]: https://img.shields.io/npm/v/@paypal/checkout-components.svg?style=flat-square
[package]: https://www.npmjs.com/package/@paypal/checkout-components
[license-badge]: https://img.shields.io/npm/l/@paypal/checkout-components.svg?style=flat-square
[license]: https://github.com/paypal/paypal-checkout-components/blob/main/LICENSE

## Basic Usage

The following gateways are provided by this package:

* PayPal_Express (PayPal Express Checkout)
* PayPal_ExpressInContext (PayPal Express In-Context Checkout)
* PayPal_Pro (PayPal Website Payments Pro)
* PayPal_Rest (Paypal Rest API)

For general usage instructions, please see the main [Omnipay](https://github.com/thephpleague/omnipay)
repository.

## Quirks

The transaction reference obtained from the purchase() response can't be used to refund a purchase. The transaction reference from the completePurchase() response is the one that should be used.

## Out Of Scope

Omnipay does not cover recurring payments or billing agreements, and so those features are not included in this package. Extensions to this gateway are always welcome. 

## Support

If you are having general issues with Omnipay, we suggest posting on
[Stack Overflow](http://stackoverflow.com/). Be sure to add the
[omnipay tag](http://stackoverflow.com/questions/tagged/omnipay) so it can be easily found.

If you want to keep up to date with release anouncements, discuss ideas for the project,
or ask more detailed questions, there is also a [mailing list](https://groups.google.com/forum/#!forum/omnipay) which
you can subscribe to.

If you believe you have found a bug, please report it using the [GitHub issue tracker](https://github.com/thephpleague/omnipay-paypal/issues),
or better yet, fork the library and submit a pull request.

Project status
==============

This is an Open Source project that is *active* but in *maintenance mode*. The
maintainers see their primary responsibilities as:

* fixing any critical data loss or security bugs.
* keeping the project up-to-date with new versions of Django (or other
  dependencies).
* merging well written patches from the community, and doing so promptly.

Large scale development work and feature additions are not planned by the
maintainers.

Some important parts of the code base are not covered by automated tests, and
may be broken for some versions of Django or Python. These parts of the code
base currently issue warnings, and the maintainers are waiting for tests to be
contributed by those who actually need those parts, and docs where appropriate.

Please bear these things in mind if filing an issue. If you discover a bug,
unless it is a critical data loss or security bug, the maintainers are unlikely
to work for free to fix it, and a new feature, or tests for existing
functionality, will only be added by the maintainers if they need it themselves.

That said, if you do have large changes that you want to contribute, including
large new features (such as implementing newer PayPal payment methods), they
will be gladly accepted if they are implemented well.

Please see `CONTRIBUTING.rst <CONTRIBUTING.rst>`_ for more information about
using the issue tracker and pull requests. Please do not open issues for support
requests.

Questions and issues
====================

If you have a question about using django-paypal, see the 
`Discussion <https://github.com/spookylukey/django-paypal/discussions>`_ section.
Only use the `issues <https://github.com/spookylukey/django-paypal/issues>`_ if 
you are reporting a bug, or describing a new feature that you would like
to contribute.

Paid support
============

Some of the maintainers may be able to provide support on a paid basis for this
Open Source project. This includes the following kinds of things:

* Paying for bug fixes or new features (with the understanding that these
  changes will become freely available as part of the project and are not
  'owned' by the person who paid for them).

* Debugging or other support for integrating django-paypal into your project.

* Implementing the integration for you from scratch.
